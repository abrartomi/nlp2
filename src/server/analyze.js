const sentimentApiUrl = "https://api.meaningcloud.com/sentiment-2.1";
const axios = require("axios");

const analyzeUrl = async (url, apiKey) => {
    try {
        const response = await axios.get(`${sentimentApiUrl}?key=${apiKey}&url=${url}&lang=en`);
        const { code } = response.data.status;

        if (code === 100) {
            return createErrorResponse(code, "Please enter a valid URL.");
        } else if (code === 212) {
            return createErrorResponse(code, response.data.status.msg);
        }

        return createSuccessResponse(response.data, code);
    } catch (error) {
        return createErrorResponse(500, "An error occurred during the analysis.");
    }
};

const createErrorResponse = (code, message) => ({
    code,
    msg: message,
});

const createSuccessResponse = (data, code) => {
    const { score_tag, agreement, subjectivity, confidence, irony } = data;
    const sample = { score_tag, agreement, subjectivity, confidence, irony };
    return { sample, status: code };
};

module.exports = {
    analyzeUrl,
};
