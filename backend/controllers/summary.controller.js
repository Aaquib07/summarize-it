import dotenv from 'dotenv'

dotenv.config()

export const summaryController = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({
        success: false,
        message: "Please enter a text",
      });
    }
    const response = await fetch(
      process.env.MODEL_URI,
      {
        headers: {
          Authorization: process.env.BEARER_TOKEN,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(text),
      }
    );
    const result = await response.json();
    return res.status(200).json(result[0]);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
