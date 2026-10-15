import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  Send,
  X,
  Bot,
  User,
  Lightbulb,
  CheckCircle,
  Copy,
  Check,
  RotateCcw,
  BookOpen
} from 'lucide-react';
import './StudyBuddyAiModal.css';

// Educational AI knowledge responder for Indian School Curricula
function generateStudyBuddyResponse(query) {
  const q = query.toLowerCase();

  if (q.includes('photosynthesis')) {
    return `### 🌱 Photosynthesis Made Easy:
**Definition:** Photosynthesis is the chemical process by which green plants manufacture their own food (glucose) from carbon dioxide and water in the presence of sunlight and chlorophyll.

**1. The Master Chemical Equation:**
\`\`\`
6CO₂ + 6H₂O + Sunlight (Chlorophyll) ➔ C₆H₁₂O₆ (Glucose) + 6O₂ (Oxygen)
\`\`\`

**2. Key Steps to Remember for Exams:**
1. **Light Absorption:** Chlorophyll pigments in chloroplasts absorb blue & red wavelengths of sunlight.
2. **Water Splitting (Photolysis):** Water ($H_2O$) is split into Hydrogen and Oxygen gas ($O_2$ is released through stomata).
3. **Carbon Reduction:** Carbon dioxide ($CO_2$) is converted into carbohydrate (glucose).

**💡 Board Exam Tip:** Stomata are microscopic pores guarded by bean-shaped guard cells that swell or shrink to regulate gas exchange!`;
  }

  if (q.includes('trigonometr') || q.includes('sin') || q.includes('tan') || q.includes('formula')) {
    return `### 📐 Trigonometry Memory Trick & Key Formulas:
Trigonometry is simply the study of ratios between side lengths of a right-angled triangle!

**1. The Classic Indian Student Mnemonic:**
> **P**andit **B**adri **P**rasad / **H**ar **H**ar **B**ole 
> *(P/H = Sin, B/H = Cos, P/B = Tan)*

- $\\sin \\theta = \\frac{\\text{Perpendicular}}{\\text{Hypotenuse}}$
- $\\cos \\theta = \\frac{\\text{Base}}{\\text{Hypotenuse}}$
- $\\tan \\theta = \\frac{\\text{Perpendicular}}{\\text{Base}} = \\frac{\\sin \\theta}{\\cos \\theta}$

**2. The Big 3 Golden Pythagorean Identities:**
1. $\\sin^2 \\theta + \\cos^2 \\theta = 1$
2. $1 + \\tan^2 \\theta = \\sec^2 \\theta$
3. $1 + \\cot^2 \\theta = \\text{cosec}^2 \\theta$

**💡 Quick Tip:** When solving 5-mark identity proofs, convert all terms into $\\sin \\theta$ and $\\cos \\theta$ first!`;
  }

  if (q.includes('gauss') || q.includes('electric') || q.includes('flux')) {
    return `### ⚡ Gauss's Theorem in Electrostatics (Class 12 Physics):
**Statement:** The total outward electric flux ($\\Phi$) passing through any closed Gaussian surface in free space is equal to $\\frac{1}{\\varepsilon_0}$ times the total net charge ($q_{\\text{enc}}$) enclosed inside that surface.

**1. Mathematical Formula:**
\`\`\`
Φ = ∮ E · dA = q_enclosed / ε₀
\`\`\`
*(where $\\varepsilon_0 = 8.854 \\times 10^{-12} \\text{ C}^2\\text{/N}\\cdot\\text{m}^2$ is the permittivity of free space).*

**2. Top Applications for CBSE Board Exams:**
1. **Infinitely Long Wire:** $E = \\frac{\\lambda}{2\\pi \\varepsilon_0 r}$
2. **Infinite Thin Sheet:** $E = \\frac{\\sigma}{2\\varepsilon_0}$
3. **Uniform Spherical Shell:** 
   - Outside: $E = \\frac{1}{4\\pi \\varepsilon_0} \\frac{q}{r^2}$
   - Inside ($r < R$): $E = 0$ (no charge enclosed inside conductor!)`;
  }

  if (q.includes('board') || q.includes('prepare') || q.includes('study tip') || q.includes('strategy')) {
    return `### 🎯 High-Yield Board Exam Preparation Strategy:
Here is a proven 4-pillar study roadmap for Class 10 & 12 Board Exams:

1. **NCERT First & Foremost:**
   - 90% of direct theory and numerical concepts come straight from NCERT examples and in-text exercises. Complete all NCERT questions before reference books.

2. **Daily MCQ & Formula Revision:**
   - Practice at least 15-20 objective MCQs daily to master Section A.
   - Maintain a dedicated formula handbook for Physics, Chemistry, and Math.

3. **Active Step-Marking Practice:**
   - In CBSE & State boards, marks are awarded for **each step**:
     * Write given data + formula (1 mark).
     * Substitute values with correct SI units (1-2 marks).
     * Final answer boxed with units (1 mark).

4. **Solve 5 Past Years' Papers with a 3-Hour Timer:**
   - Practicing timed papers overcomes exam anxiety and improves speed!`;
  }

  if (q.includes('business') || q.includes('profession') || q.includes('employment') || q.includes('commerce') || q.includes('account')) {
    return `### 📊 Commerce Essentials: Business vs Profession vs Employment:
For Class 11 Business Studies, here is the golden comparison table:

| Feature | Business | Profession | Employment |
| :--- | :--- | :--- | :--- |
| **Establishment** | Entrepreneur's decision & legal formalities | Degree from professional body (e.g. ICAI, Bar Council) | Appointment letter & service agreement |
| **Qualification** | No minimum qualification required | Specialized degree & professional training mandatory | Prescribed by the employer |
| **Reward / Return** | Profit (uncertain and fluctuating) | Professional Fees | Fixed salary or regular wages |
| **Risk Factor** | High and continuous | Moderate | Negligible / None |

**Golden Rule of Double-Entry Accounting:**
- **Personal Account:** Debit the receiver, Credit the giver.
- **Real Account:** Debit what comes in, Credit what goes out.
- **Nominal Account:** Debit all expenses and losses, Credit all incomes and gains.`;
  }

  if (q.includes('french') || q.includes('revolution') || q.includes('bastille') || q.includes('history')) {
    return `### 🏰 The French Revolution (1789) in 5 High-Yield Points:
For Class 9 Social Science / History:

1. **Causes of Discontent:** 
   French society was divided into 3 Estates. The Clergy (1st) and Nobility (2nd) enjoyed tax exemptions, while the 3rd Estate (peasants, workers, lawyers) paid all taxes (*Tithe* to Church, *Taille* to King).
2. **Storming of the Bastille (14 July 1789):**
   Citizens stormed the royal fortress prison Bastille, symbol of tyrannical royal despotism. This marked the outbreak of the revolution.
3. **The National Assembly & Rights Declaration (1789):**
   Proclaimed the historic *Declaration of the Rights of Man and of the Citizen*, establishing liberty, equality, and fraternity.
4. **Reign of Terror (1793-1794):**
   Led by Maximilien Robespierre and the Jacobins. Thousands were executed by guillotine until Robespierre himself was arrested and executed.
5. **Global Legacy:**
   Inspired democratic movements across the world, including India's freedom fighters Tipu Sultan and Raja Rammohan Roy.`;
  }

  // General helpful educational fallback
  return `### 📘 Concept Breakdown for "${query}":
Here is a structured explanation to help you master this topic:

1. **Core Concept Definition:**
   - In your curriculum, **${query}** represents a fundamental principle.
   - Break it down into smaller parts: *What is it?*, *Why does it occur?*, and *Where is it applied in real life?*

2. **Step-by-Step Understanding:**
   - **Step 1:** Review key definitions and units (SI units for Science/Math, standard terms for Humanities/Commerce).
   - **Step 2:** Relate the theory to standard textbook examples.
   - **Step 3:** Try 2-3 practice MCQs to verify that you understand the edge cases.

3. **Recommended Study Next Step:**
   - Jump to your class in StudyHub and open the corresponding chapter notes.
   - Practice the interactive **Flashcards** and **MCQs** for quick retention!

*💡 Tip: Feel free to ask me for specific formula derivations, memory mnemonics, or practice numerical problems!*`;
}

export default function StudyBuddyAiModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: `👋 Namaste! I am **StudyBuddy AI**, your friendly study companion for **Classes 6 to 12** in India.

I can help you:
- Explain complex Science & Math concepts in simple everyday language.
- Share memory tricks & mnemonics for formulas.
- Provide sample answers for Board Exam questions.
- Break down Commerce and Humanities topics.

What topic would you like to study or clarify today?`
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [copiedId, setCopiedId] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const quickPrompts = [
    'Explain Photosynthesis simply 🌱',
    'Trigonometry formula tricks 📐',
    'What is Gauss’s Law? ⚡',
    'Class 10 Board exam tips 🎯',
    'Business vs Profession vs Employment 📊',
    'French Revolution 5 key points 🏰'
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query.trim()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');

    // Simulate AI thinking and response
    setTimeout(() => {
      const aiReply = generateStudyBuddyResponse(query);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'ai',
          text: aiReply
        }
      ]);
    }, 450);
  };

  const handleCopy = (id, text) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: 'ai',
        text: 'Chat cleared! What new topic or question can I help you with?'
      }
    ]);
  };

  return (
    <div className="studybuddy-modal-overlay" onClick={onClose}>
      <div className="studybuddy-modal-card animate-fade" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="studybuddy-header">
          <div className="studybuddy-identity">
            <div className="bot-avatar">
              <Bot size={22} />
            </div>
            <div>
              <div className="bot-name-row">
                <h3>StudyBuddy AI</h3>
                <span className="ai-tag">Tutor Simulation</span>
              </div>
              <p className="bot-subtext">Free educational doubt assistant for Classes 6-12</p>
            </div>
          </div>

          <div className="header-actions">
            <button className="icon-btn-clear" onClick={handleClearChat} title="Reset Chat">
              <RotateCcw size={16} />
            </button>
            <button className="icon-btn-close" onClick={onClose} title="Close Assistant">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Chat Messages Body */}
        <div className="studybuddy-chat-body">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`chat-bubble-row ${msg.sender === 'user' ? 'row-user' : 'row-ai'}`}
            >
              <div className="bubble-avatar">
                {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className="bubble-content">
                <div className="bubble-text">
                  {msg.text.split('\n').map((line, idx) => {
                    if (line.startsWith('### ')) {
                      return <h4 key={idx} className="bubble-h4">{line.replace('### ', '')}</h4>;
                    }
                    if (line.startsWith('**') && line.endsWith('**')) {
                      return <p key={idx}><strong>{line.replace(/\*\*/g, '')}</strong></p>;
                    }
                    if (line.startsWith('> ')) {
                      return <blockquote key={idx} className="bubble-quote">{line.replace('> ', '')}</blockquote>;
                    }
                    if (line.startsWith('```')) {
                      return null;
                    }
                    return <p key={idx}>{line}</p>;
                  })}
                </div>

                {msg.sender === 'ai' && (
                  <button
                    className="copy-bubble-btn"
                    onClick={() => handleCopy(msg.id, msg.text)}
                    title="Copy explanation"
                  >
                    {copiedId === msg.id ? <Check size={13} /> : <Copy size={13} />}
                    <span>{copiedId === msg.id ? 'Copied' : 'Copy'}</span>
                  </button>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="studybuddy-prompts-bar">
          <span className="prompts-label">Try asking:</span>
          <div className="prompts-scroll">
            {quickPrompts.map((prompt, pIdx) => (
              <button
                key={pIdx}
                className="prompt-chip"
                onClick={() => handleSend(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Input Bar */}
        <div className="studybuddy-input-bar">
          <form
            className="input-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              type="text"
              placeholder="Ask any question (e.g. 'How does light refract?', 'Molar mass formula')..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="chat-input"
            />
            <button
              type="submit"
              className="send-btn"
              disabled={!inputText.trim()}
              title="Send message"
            >
              <Send size={16} />
            </button>
          </form>
          <div className="chat-demo-disclaimer">
            <span>Educational AI Demonstration. Always cross-check with official NCERT / State Board textbooks.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
