/* SAAHITHI SPACE - CORTEX DATABASE */

const SYSTEM_DATA = {
    // NEW: Dynamic Descriptions for each Tab
    config: {
        frontburner: "what's capturing my attention.",
        backburner: "simmering prototypes.",
        portfolio: "experiments, case studies, and lessons learned.",
        thoughts: "notes and musings to remember."
    },
    
    // CONTENT ARRAYS
    frontburner: [
        { 
            id: 'f1',
            date: 'Jan 2026', 
            title: 'MLSecOps for AI Supply Chains', 
            excerpt: 'How do you verify that your ML model hasn\'t been poisoned? Learning about artifact signing, SLSA frameworks, and what Chainguard is building.', 
            body: 'Working',
            tags: ['security', 'ML', 'supply-chain'],
            image: '' 
        },
            ],
    backburner: [
        { 
            id: 'b1',
            date: 'Nov 2025', 
            title: '"Flow" OS', 
            excerpt: 'Designing a personal dashboard that prioritizes Flow states over To-do lists.', 
            body: 'I am prototyping a "Flow OS" that groups tasks by cognitive load rather than urgency.',
            tags: ['productivity', 'prototype'],
            image: '' 
        }
    ],
    portfolio: [
        { 
            id: 'c1',
            date: 'Nov 2025', 
            title: 'Semantic Open Source Software', 
            excerpt: '', 
            body: '',
            tags: ['product', 'workshop', 'portfolio'],
            image: '' 
        }
    ],
    thoughts: [
        { 
            id: 'q1',
            date: 'Jan 2026', 
            title: 'Personal OS', 
            excerpt: 'Can you rewrite your kernel level OS?',
	    body: 'Maybe, but need extreme self-awareness \+ pain \+ forcing function to rewire old perceptions.',
            tags: ['philosophy'],
            image: '' 
        },
	{ 
            id: 'q2',
            date: 'Jan 2026', 
            title: 'Misalignment', 
            excerpt: 'Will you trust the inner alignment detector over external validation?', 
            body: 'When forced to choose by company demands or by mission, I\'ll trust my detector.',
            tags: ['philosophy'],
            image: '' 
        },
	{ 
            id: 'q3',
            date: 'Jan 2026', 
            title: 'Vulnerability', 
            excerpt: 'Can you choose vulnerability over safety?', 
            body: 'It\'s easy to default to safety. Partnerships, leadership, and sustained vision require vulnerability and authentic connection to purpose.',
            tags: ['philosophy'],
            image: '' 
        }

    ]
};