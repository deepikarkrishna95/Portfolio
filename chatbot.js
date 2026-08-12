// Chatbot responses for GPU Systems Engineer
const responses = {
  'hello': 'Hi! I\'m Deepika\'s AI assistant. Ask me about GPU systems, graphics programming, or her experience!',
  'hi': 'Hello! What would you like to know about GPU architecture or Deepika\'s work?',
  'hey': 'Hey there! Feel free to ask about GPU optimization, Vulkan, CUDA, or Deepika\'s projects.',
  'how are you': 'I\'m doing great, thanks for asking! How can I help you learn about GPU systems?',
  'what is your name': 'I\'m Deepika\'s virtual assistant. I can tell you about her GPU systems expertise!',
  'who are you': 'I\'m an AI chatbot representing Deepika Ravi Krishna, a Senior GPU Systems Engineer with 8+ years of experience.',
  'experience': 'Deepika has 8+ years of expertise in GPU architecture, graphics programming, and high-performance compute. Currently at Qualcomm as Senior GPU Validation & Graphics Systems Engineer (Jul 2022 - Apr 2026). Previously at Siemens Healthineers (medical imaging) and Continental Automotive (ADAS visualization).',
  'gpu': 'Deepika specializes in GPU architecture validation, Vulkan render pipelines, Adreno TBDR design, and GPU performance profiling using RenderDoc, Snapdragon Profiler, and NSight Systems.',
  'vulkan': 'Deep expertise in Vulkan render passes, command buffers, descriptor sets, PSO management, image layout transitions, synchronization barriers, and Vulkan Conformance Testing.',
  'profiling': 'Skilled in GPU profiling methodologies including RenderDoc (frame capture, shader debugging), Snapdragon Profiler, NVIDIA NSight, PIX, Perfetto, and GPU performance counter analysis.',
  'cuda': 'Experienced with CUDA GPU-to-GPU interoperability for compute acceleration. Achieved 30-40% performance improvements on radar visualization pipelines using direct GPU-to-GPU data transfer.',
  'qualcomm': 'At Qualcomm, Deepika validates GPU rendering pipelines on Adreno architecture, optimizes GPU performance, designs validation frameworks, and has reduced post-shipment RMAs by 10-15%.',
  'adreno': 'Deep working knowledge of Adreno TBDR (Tile-Based Deferred Rendering) pipeline including binning, rendering, and resolve passes with GPU memory hierarchy optimization.',
  'rendering': 'Specializes in real-time rendering optimization, draw call efficiency, memory bandwidth utilization, and GPU resource allocation across Vulkan and OpenGL workloads.',
  'opengl': 'Proficient in OpenGL/OpenGL ES, GLSL shaders, and GPU rendering pipeline design for medical imaging and automotive applications.',
  'automotive': 'Led GPU visualization for ADAS programs at Continental for VW, Daimler, BMW, and Porsche. Built multi-sensor fusion rendering frameworks for radar and camera visualization.',
  'medical': 'At Siemens Healthineers, developed GPU-accelerated DICOM medical image rendering for real-time clinical diagnostic workflows with low-latency requirements.',
  'skills': 'GPU Programming (Vulkan, OpenGL, CUDA), GPU Architecture (Adreno, TBDR, Compute Shaders, Ray Tracing), GPU Profiling (RenderDoc, NSight), C++17, Python, and real-time systems optimization.',
  'performance': 'Achieved 50-60% execution time reduction through GPU-aware architecture optimization and 30-40% improvement via GPU acceleration techniques.',
  'education': 'B.E. in Computer Science from Sri Krishna Institute of Technology (2013-2017, GPA: 76.02%). Certified in Modern OpenGL & C++ (Udemy 2022).',
  'contact': 'Email: deepikar.krishna95@gmail.com | Phone: +91 8792523781 | LinkedIn: linkedin.com/in/deepika-ravikrishna',
  'linkedin': 'Connect with Deepika: linkedin.com/in/deepika-ravikrishna/',
  'collaborate': 'Deepika is open to conversations about GPU systems, graphics programming, high-performance compute, and GPU-accelerated ML inference challenges.',
  'awards': 'Received Star of the Month Award at Continental and nominated for Automotive Awards for cross-functional collaboration. Filed Invention Disclosure during Continental\'s Innovation program.',
  'help': 'I can tell you about: GPU architecture, Vulkan/OpenGL, profiling tools, her work at Qualcomm/Continental/Siemens, CUDA, ADAS systems, medical imaging, performance optimization, skills, education, or contact info.',
  'bye': 'Goodbye! Feel free to connect with Deepika on LinkedIn. Have a great day!',
  'thanks': 'You\'re welcome! Anything else about GPU systems or Deepika\'s work?',
  'thank you': 'Happy to help! Ask me anything about GPU programming or her experience.',
  'default': 'That\'s interesting! I can tell you about GPU architecture, Deepika\'s projects, profiling tools, or how to get in touch. What interests you?'
};

// Toggle chatbot visibility
function toggleChatbot() {
  const chatbot = document.getElementById('chatbotContainer');
  chatbot.classList.toggle('active');
  
  // Focus input when opened
  if (chatbot.classList.contains('active')) {
    document.getElementById('userInput').focus();
  }
}

// Send user message
function sendMessage() {
  const userInput = document.getElementById('userInput');
  const message = userInput.value.trim();

  if (message === '') return;

  // Display user message
  addMessage(message, 'user');
  userInput.value = '';

  // Simulate bot typing
  setTimeout(() => {
    const botResponse = getBotResponse(message);
    addMessage(botResponse, 'bot');
  }, 500);
}

// Get bot response based on user input
function getBotResponse(userMessage) {
  const lowerMessage = userMessage.toLowerCase();

  // Check for exact matches
  if (responses[lowerMessage]) {
    return responses[lowerMessage];
  }

  // Check for partial matches
  for (let key in responses) {
    if (lowerMessage.includes(key)) {
      return responses[key];
    }
  }

  // Default response
  return responses['default'];
}

// Add message to chat
function addMessage(message, sender) {
  const messagesDiv = document.getElementById('messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}-message`;
  messageDiv.innerHTML = `<div class="message-text">${escapeHtml(message)}</div>`;
  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Handle Enter key press
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

// Initialize chatbot with welcome message
window.addEventListener('load', () => {
  // Check if DOM is ready
  const messagesDiv = document.getElementById('messages');
  if (messagesDiv) {
    addMessage('Hi! 👋 I\'m here to help. Ask me about GPU architecture, Vulkan, profiling tools, Deepika\'s experience, or how to get in touch!', 'bot');
  }
});
