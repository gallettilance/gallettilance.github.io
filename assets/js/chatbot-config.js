/**
 * Chatbot Configuration
 * Loads course knowledge and sets up API key
 */

async function loadChatbotConfig() {
    try {
        // Load course knowledge
        console.log('📚 Loading course knowledge...');
        const response = await fetch('/course_knowledge.json');
        if (response.ok) {
            window.COURSE_KNOWLEDGE = await response.json();
            console.log('✅ Course knowledge loaded successfully');
            console.log('📊 Knowledge sections:', Object.keys(window.COURSE_KNOWLEDGE));
        } else {
            console.error('❌ Failed to load course knowledge:', response.status, response.statusText);
            window.COURSE_KNOWLEDGE = {};
        }
    } catch (error) {
        console.error('❌ Error loading course knowledge:', error);
        window.COURSE_KNOWLEDGE = {};
    }

    // API key will be provided by users
    console.log('✅ Chatbot ready - users will provide their own API key');
}

// Load config when page loads
document.addEventListener('DOMContentLoaded', loadChatbotConfig); 