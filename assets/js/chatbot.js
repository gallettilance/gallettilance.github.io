/**
 * Course Chatbot - Bring Your Own API Key
 * Users must provide their own OpenAI API key to access the chatbot
 */

class CourseChatbot {
    constructor() {
        this.isOpen = false;
        this.isLoading = false;
        this.messages = [];
        this.openaiApiKey = null;
        this.courseKnowledge = window.COURSE_KNOWLEDGE || {};
        
        this.init();
    }

    init() {
        this.createChatWidget();
        this.bindEvents();
        this.checkApiKey();
    }

    createChatWidget() {
        // Create chat button
        const chatButton = document.createElement('button');
        chatButton.className = 'chat-button';
        chatButton.setAttribute('aria-label', 'Open course assistant');
        chatButton.innerHTML = '💬';
        chatButton.title = 'Course Assistant';

        // Create chat window
        const chatWindow = document.createElement('div');
        chatWindow.className = 'chat-window';
        chatWindow.innerHTML = `
            <div class="chat-header">
                <div>
                    <h3>Course Assistant</h3>
                    <div class="chat-subtitle">Ask about deadlines, topics, or student perspectives</div>
                </div>
                <div class="chat-header-actions">
                    <button class="refresh-key-btn" aria-label="Change API Key" title="Change API Key">🔑</button>
                    <button class="close-chat" aria-label="Close chat">×</button>
                </div>
            </div>
            <div class="chat-messages"></div>
            <div class="chat-input-container">
                <form class="chat-input-form">
                    <textarea 
                        class="chat-input" 
                        placeholder="Ask me anything about the course..."
                        rows="1"
                        aria-label="Type your message"
                    ></textarea>
                    <button type="submit" class="send-button" aria-label="Send message">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22,2 15,22 11,13 2,9"></polygon>
                        </svg>
                    </button>
                </form>
            </div>
        `;

        // Add to page
        document.body.appendChild(chatButton);
        document.body.appendChild(chatWindow);

        // Store references
        this.chatButton = chatButton;
        this.chatWindow = chatWindow;
        this.messagesContainer = chatWindow.querySelector('.chat-messages');
        this.inputForm = chatWindow.querySelector('.chat-input-form');
        this.input = chatWindow.querySelector('.chat-input');
        this.sendButton = chatWindow.querySelector('.send-button');
        this.closeButton = chatWindow.querySelector('.close-chat');
        this.refreshKeyButton = chatWindow.querySelector('.refresh-key-btn');
    }

    bindEvents() {
        // Toggle chat
        this.chatButton.addEventListener('click', () => this.toggleChat());
        this.closeButton.addEventListener('click', () => this.closeChat());
        this.refreshKeyButton.addEventListener('click', () => this.changeApiKey());

        // Handle form submission
        this.inputForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.sendMessage();
        });

        // Auto-resize textarea
        this.input.addEventListener('input', () => {
            this.input.style.height = 'auto';
            this.input.style.height = Math.min(this.input.scrollHeight, 120) + 'px';
        });

        // Handle Enter key
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isOpen && 
                !this.chatWindow.contains(e.target) && 
                !this.chatButton.contains(e.target)) {
                this.closeChat();
            }
        });
    }

    toggleChat() {
        if (this.isOpen) {
            this.closeChat();
        } else {
            this.openChat();
        }
    }

    openChat() {
        this.isOpen = true;
        this.chatWindow.classList.add('open');
        this.chatButton.classList.add('active');
        this.input.focus();
    }

    closeChat() {
        this.isOpen = false;
        this.chatWindow.classList.remove('open');
        this.chatButton.classList.remove('active');
    }

    checkApiKey() {
        // Check if API key is stored in localStorage
        const storedKey = localStorage.getItem('openai_api_key');
        console.log('🔍 Checking API key...');
        console.log('📦 Stored key exists:', !!storedKey);
        
        if (storedKey) {
            console.log('📏 Stored key length:', storedKey.length);
            console.log('🔍 Stored key starts with:', storedKey.substring(0, 10) + '...');
            this.openaiApiKey = storedKey;
            console.log('✅ Using stored API key');
            this.addWelcomeMessage();
        } else {
            console.log('❌ No stored API key, showing prompt');
            this.showApiKeyPrompt();
        }
    }

    showApiKeyPrompt() {
        console.log('🔐 Showing API key prompt...');
        this.addMessage(
            "🔐 **API Key Required**\n\n" +
            "To use the course assistant, you need to provide your own OpenAI API key.\n\n" +
            "**How to get one:**\n" +
            "1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)\n" +
            "2. Create a new API key\n" +
            "3. Paste it below\n\n" +
            "**Security:** Your key is stored locally and never sent to our servers.\n\n" +
            "Enter your OpenAI API key:",
            'bot'
        );

        // Create API key input
        const apiKeyForm = document.createElement('form');
        apiKeyForm.className = 'api-key-form';
        apiKeyForm.innerHTML = `
            <div class="api-key-input-container">
                <input 
                    type="password" 
                    id="openai-api-key"
                    name="openai-api-key"
                    class="api-key-input" 
                    placeholder="sk-..." 
                    aria-label="OpenAI API Key"
                />
                <button type="submit" class="api-key-submit">Set Key</button>
            </div>
        `;

        const messageDiv = document.createElement('div');
        messageDiv.className = 'chat-message bot';
        messageDiv.appendChild(apiKeyForm);
        this.messagesContainer.appendChild(messageDiv);

        // Handle API key submission
        const apiKeyInput = apiKeyForm.querySelector('.api-key-input');
        const submitButton = apiKeyForm.querySelector('.api-key-submit');

        apiKeyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const apiKey = apiKeyInput.value.trim();
            
            if (apiKey && apiKey.startsWith('sk-')) {
                this.setApiKey(apiKey);
                apiKeyForm.remove();
                this.addMessage("✅ API key set successfully! You can now ask questions.", 'bot');
                this.addWelcomeMessage();
            } else {
                this.addMessage("❌ Invalid API key format. Please enter a valid OpenAI API key starting with 'sk-'.", 'bot');
            }
        });

        this.scrollToBottom();
    }

    setApiKey(apiKey) {
        console.log('🔑 Setting API key...');
        console.log('📏 Key length:', apiKey.length);
        console.log('🔍 Key starts with:', apiKey.substring(0, 10) + '...');
        
        this.openaiApiKey = apiKey;
        localStorage.setItem('openai_api_key', apiKey);
        
        // Verify storage
        const stored = localStorage.getItem('openai_api_key');
        console.log('💾 Stored key length:', stored.length);
        console.log('✅ Key stored successfully');
    }

    changeApiKey() {
        console.log('🔄 Changing API key...');
        
        // Clear current key
        this.openaiApiKey = null;
        localStorage.removeItem('openai_api_key');
        
        // Clear messages and show new prompt
        this.messagesContainer.innerHTML = '';
        this.showApiKeyPrompt();
    }

    addWelcomeMessage() {
        this.addMessage(
            "Hi! I'm your CS 506 course assistant. I can help you with:\n\n" +
            "• Course topics and concepts\n" +
            "• Assignment deadlines and requirements\n" +
            "• Student perspectives on topics\n" +
            "• Lab questions and solutions\n\n" +
            "What would you like to know?",
            'bot'
        );
    }

    async sendMessage() {
        if (this.isLoading) return;

        const message = this.input.value.trim();
        if (!message) return;

        // Check if API key is set
        if (!this.openaiApiKey) {
            this.addMessage("❌ Please set your OpenAI API key first.", 'bot');
            this.showApiKeyPrompt();
            return;
        }

        // Clear input
        this.input.value = '';
        this.input.style.height = 'auto';

        // Add user message
        this.addMessage(message, 'user');

        // Disable input and show loading
        this.isLoading = true;
        this.input.disabled = true;
        this.sendButton.disabled = true;
        this.showTypingIndicator();

        try {
            const response = await this.callOpenAI(message);
            
            // Remove typing indicator
            this.hideTypingIndicator();
            
            // Add bot response
            this.addMessage(response, 'bot');

        } catch (error) {
            console.error('Chatbot error:', error);
            this.hideTypingIndicator();
            
            if (error.message.includes('401') || error.message.includes('unauthorized')) {
                this.addMessage("❌ Invalid API key. Please check your key and try again.", 'bot');
                this.showApiKeyPrompt();
            } else {
                this.addMessage('Sorry, I encountered an error. Please try again.', 'bot');
            }
        } finally {
            this.isLoading = false;
            this.sendButton.disabled = false;
            this.input.disabled = false;
            this.input.focus();
        }
    }

    addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}`;
        
        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.textContent = content;
        
        messageDiv.appendChild(bubble);
        this.messagesContainer.appendChild(messageDiv);
        
        // Scroll to bottom
        this.scrollToBottom();
        
        // Store message
        this.messages.push({ content, sender, timestamp: Date.now() });
    }

    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-message bot typing-indicator';
        typingDiv.innerHTML = `
            <div class="message-bubble">
                <div style="display: flex; gap: 4px;">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        this.messagesContainer.appendChild(typingDiv);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const typingIndicator = this.messagesContainer.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    scrollToBottom() {
        setTimeout(() => {
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        }, 100);
    }

    async callOpenAI(message) {
        if (!this.openaiApiKey) {
            throw new Error('API key not set');
        }

        console.log('🔍 Calling OpenAI API...');
        console.log('📊 Course knowledge loaded:', Object.keys(this.courseKnowledge));

        // Create system prompt with course knowledge
        const systemPrompt = this.createSystemPrompt();
        
        // Prepare messages for OpenAI
        const messages = [
            { role: 'system', content: systemPrompt },
            ...this.messages.slice(-10).map(msg => ({
                role: msg.sender === 'user' ? 'user' : 'assistant',
                content: msg.content
            })),
            { role: 'user', content: message }
        ];

        console.log('📤 Sending request to OpenAI...');

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.openaiApiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: messages,
                    max_tokens: 500,
                    temperature: 0.7
                })
            });

            console.log('📥 Response status:', response.status);

            if (!response.ok) {
                const errorData = await response.json();
                console.error('❌ OpenAI API error:', errorData);
                throw new Error(`OpenAI API error: ${errorData.error?.message || response.statusText}`);
            }

            const data = await response.json();
            console.log('✅ OpenAI response received');
            return data.choices[0].message.content;
        } catch (error) {
            console.error('❌ Network or API error:', error);
            throw error;
        }
    }

    createSystemPrompt() {
        return `You are a helpful course assistant for BU CS 506 - Data Science Tools and Applications taught by Lance Galletti.

IMPORTANT: Only answer questions related to this specific course. If asked about anything outside the course scope, politely decline and redirect to course-related topics.

Course Information:
${JSON.stringify(this.courseKnowledge.courseInfo || {}, null, 2)}

Course Schedule:
${JSON.stringify(this.courseKnowledge.schedule || {}, null, 2)}

Course Topics:
${JSON.stringify(this.courseKnowledge.topics || {}, null, 2)}

FAQ:
${JSON.stringify(this.courseKnowledge.faq || [], null, 2)}

Student Notes (multiple perspectives):
${JSON.stringify(this.courseKnowledge.studentNotes || [], null, 2)}

Labs:
${JSON.stringify(this.courseKnowledge.labs || [], null, 2)}

Lab Solutions:
${JSON.stringify(this.courseKnowledge.labSolutions || [], null, 2)}

Instructions:
1. Answer questions about course content, deadlines, topics, and assignments
2. When referencing student notes, attribute perspectives (e.g., "Alice thinks... while Bob thinks...")
3. Be helpful but concise
4. If asked about something not in the course, say: "I can only help with CS 506 course content. Please ask about course topics, assignments, or student perspectives."
5. Use the course knowledge provided above to give accurate, contextual answers.`;
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if chatbot should be enabled
    if (typeof window.ENABLE_CHATBOT === 'undefined' || window.ENABLE_CHATBOT !== false) {
        new CourseChatbot();
    }
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CourseChatbot;
} 