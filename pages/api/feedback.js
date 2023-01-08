import path from "path";
import fs from "fs";

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
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newFeedback);
    console.log("mtnuma stex", data);
    fs.writeFileSync(filePath, JSON.stringify(data));

    res
      .status(201)
      .json({ messange: "yasamani tsari tak", feedback: newFeedback });
  } else {
    res.status(200).json({ messange: "barlus dzez" });
  }
}

export default handler;
