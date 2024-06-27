
function calculateAndSendResponse() {
    const urlParams = new URLSearchParams(window.location.search);
    const calculation = urlParams.get('calculation');
    
    if (calculation) {
        try {
            // Perform calculation
            const result = eval(calculation);
            // Send result back in JSON format
            const jsonResponse = { result: result };
            return JSON.stringify(jsonResponse);
        } catch (error) {
            console.error('Error occurred during calculation:', error);
            // Send error back in JSON format
            const errorResponse = { error: error.message };
            return JSON.stringify(errorResponse);
        }
    } else {
        console.error('No calculation specified in the URL!');
        // Send error back in JSON format
        const errorResponse = { error: 'No calculation specified' };
        return JSON.stringify(errorResponse);
    }
}

// Initiate the response sending
const response = calculateAndSendResponse();
window.parent.postMessage(response, '*');
