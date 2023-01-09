import path from "path";
import fs from "fs";

export function buildFeedbackPath() {
  return path.join(process.cwd(), 'data', 'feedback.json');	  return path.join(process.cwd(), 'data', 'feedback.json');
}	


function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);	
  const data = JSON.parse(fileData);
  return data;
}	

function handler(req, res) {
  if (req.method === "POST") {
    console.log("req body", req.body);
    const emailText = req.body.email;
    const feedabackText = req.body.feedback;

    const newFeedback = {
      id: new Date().toISOString(),
      email: emailText,
      feedback: feedabackText,
    };

    //store in database
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const data = extractFeedback(filePath);
    data.push(newFeedback);
    console.log("mtnuma stex", data);
    fs.writeFileSync(filePath, JSON.stringify(data));

    res
      .status(201)
      .json({ messange: "yasamani tsari tak", feedback: newFeedback });
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({ feedback: data });	    
  }
}

export default handler;
