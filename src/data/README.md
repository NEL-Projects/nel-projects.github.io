# Lab Members Data Management

This file explains how to easily update lab member information without coding knowledge.

## How to Edit Lab Members

### 1. Open the JSON File
- Navigate to `src/data/lab-members.json`
- Open it with any text editor (Notepad, TextEdit, VS Code, etc.)

### 2. Adding a New Team Member
To add a new team member, copy this template and paste it in the `teamMembers` array:

```json
{
  "name": "Full Name",
  "title": "Position (e.g., PhD Candidate, Honours Student, Post Doctoral Researcher)",
  "description": "Brief description of their research and role",
  "photo": "/images/their-photo.jpg",
  "researchInterests": [
    "Neuromodulation",
    "Epilepsy", 
    "Electrophysiology"
  ]
}
```

### 3. Updating Lab Leader Information
The `labLeader` section contains information about Dr. Daria Anderson. You can update:
- `name`: Full name
- `title`: Current position
- `description`: Biography and background
- `photo`: Path to photo file
- `researchInterests`: Array of research areas
- `education`: Array of educational background
- `achievements`: Array of notable achievements

### 4. Updating Contact Information
The `contact` section contains the lab's contact details. You can update:
- `email`: Primary contact email address
- `title`: Contact section heading
- `description`: Brief description for the contact section
- `message`: Additional message or instructions

### 5. Adding Photos
1. Place photo files in the `public/images/` folder
2. Reference them in the JSON as `/images/filename.jpg`
3. Supported formats: JPG, PNG, WebP

### 6. Research Areas
The `researchAreas` section defines the main research focus areas. Each area has:
- `title`: Research area name
- `description`: Brief explanation
- `icon`: Icon name (Zap, Brain, Network, etc.)

### 7. Important Notes
- Always use double quotes `"` not single quotes `'`
- Separate multiple items with commas
- Don't forget the comma after each item except the last one
- Keep the JSON structure intact - don't remove brackets or braces

### 8. Example of Adding a New Member
```json
{
  "name": "Dr. Alex Chen",
  "title": "PhD Candidate",
  "description": "Researching novel neuromodulation techniques for epilepsy treatment.",
  "photo": "/images/alex-chen.jpg",
  "researchInterests": [
    "Neuromodulation",
    "Epilepsy",
    "Electrophysiology"
  ]
}
```

### 9. Example of Updating Contact Information
```json
{
  "contact": {
    "email": "new.email@sydney.edu.au",
    "title": "Get in Touch",
    "description": "Interested in our research? We'd love to hear from you!",
    "message": "Feel free to reach out for collaboration opportunities or to learn more about joining our lab."
  }
}
```

### 10. Common Titles
- Lab Director & Principal Investigator
- Post Doctoral Researcher
- PhD Candidate
- Honours Student
- Research Assistant
- Undergraduate Student

### 11. Research Interest Keywords
- Neuromodulation
- Epilepsy
- Electrophysiology
- Brain-computer interfaces
- Neural circuits
- Neural stimulation
- Neurological disorders
- Temporal lobe epilepsy
- Network restructuring

After making changes, save the file and the website will automatically update with the new information. 