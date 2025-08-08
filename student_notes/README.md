# Student Notes Directory

This directory contains student-contributed notes about course topics. These notes help other students learn from different perspectives and experiences.

## 📝 How to Contribute

### 1. Create Your Note File
Create a new markdown file in this directory with the format:
```
YYYY-MM-DD-your-name-topic.md
```

Example: `2025-01-22-alice-linear-regression.md`

### 2. Follow the Required Format
Your note must include these sections:

```markdown
---
title: "Your Note Title"
student_name: "Your Name"
topic: "Topic Name"
difficulty_level: "beginner/intermediate/advanced"
date: "YYYY-MM-DD"
---

## What I Think [Topic]

Your understanding of the topic here...

## What I Found Challenging

What difficulties you encountered while learning this topic...

## My Tips for Other Students

1. Your first tip
2. Your second tip  
3. Your third tip
```

### 3. Submit Your Note
- Create a Pull Request with your note file
- The note will be automatically validated for format
- **Auto-merge**: If your PR only contains student notes and passes all tests, it will be automatically merged!
- Your notes will be added to the course knowledge base
- The chatbot will then be able to share your perspective with other students

**💡 Pro Tip**: Make sure your note follows the exact format - this ensures automatic approval and merging!

## 🤖 Auto-Merge Feature

**How it works:**
1. **Submit your note** as a Pull Request
2. **Automatic validation** checks your note format
3. **If valid and only student notes** → Auto-merged immediately!
4. **If invalid** → Helpful error message with format guide

**What triggers auto-merge:**
- ✅ Only files in `student_notes/` directory changed
- ✅ Proper frontmatter (title, student_name, topic, difficulty_level)
- ✅ Required sections (What I Think, What I Found Challenging, My Tips)
- ✅ All tests pass (course knowledge generation works)

**What doesn't auto-merge:**
- ❌ Files outside `student_notes/` directory
- ❌ Missing required frontmatter fields
- ❌ Missing required content sections
- ❌ Any test failures

## 📋 Example Note

See `example-student-linear-regression.md` for a complete example.

## 🎯 Topics to Cover

Consider contributing notes about:
- Linear Regression
- Linear Model Evaluation
- Logistic Regression
- Data Cleaning
- Model Selection
- Any other course topics you've learned about

## ⚠️ Important Notes

- **Be honest** about what you found challenging
- **Share your perspective** - there's no "right" way to understand topics
- **Help others** with your tips and insights
- **Keep it constructive** and supportive of fellow students

Your notes help create a collaborative learning environment! 🌟 