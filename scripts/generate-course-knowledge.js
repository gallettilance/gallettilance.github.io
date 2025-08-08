#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

console.log('🤖 Generating course knowledge from site content...');

// Function to read and parse markdown files
function parseMarkdownFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { data, content: body } = matter(content);
    return { frontmatter: data, content: body };
  } catch (error) {
    console.error(`❌ Error reading ${filePath}:`, error.message);
    return null;
  }
}

// Function to extract course info from _config.yml
function extractCourseInfo() {
  const configPath = path.join(__dirname, '..', '_config.yml');
  try {
    const content = fs.readFileSync(configPath, 'utf8');
    const lines = content.split('\n');
    const courseInfo = {};
    
    for (const line of lines) {
      if (line.startsWith('title:')) {
        courseInfo.name = line.replace('title:', '').trim();
      } else if (line.startsWith('tagline:')) {
        courseInfo.description = line.replace('tagline:', '').trim();
      } else if (line.startsWith('author:')) {
        courseInfo.instructor = line.replace('author:', '').trim();
      }
    }
    
    return {
      name: courseInfo.name || "CS 506 - Data Science Tools and Applications",
      instructor: courseInfo.instructor || "Lance Galletti",
      semester: "Spring 2025",
      description: courseInfo.description || "Data Science Tools and Applications course at Boston University"
    };
  } catch (error) {
    console.error('❌ Error reading _config.yml:', error.message);
    return {
      name: "CS 506 - Data Science Tools and Applications",
      instructor: "Lance Galletti",
      semester: "Spring 2025",
      description: "Data Science Tools and Applications course at Boston University"
    };
  }
}

// Function to extract schedule from topic modules
function extractSchedule() {
  const modulesDir = path.join(__dirname, '..', '_modules');
  const schedule = {};
  
  try {
    const files = fs.readdirSync(modulesDir);
    const topicFiles = files.filter(file => file.startsWith('topic-') && file.endsWith('.md'));
    
    topicFiles.sort().forEach(file => {
      const filePath = path.join(modulesDir, file);
      const parsed = parseMarkdownFile(filePath);
      
      if (parsed && parsed.frontmatter.title) {
        const topicMatch = file.match(/topic-(\d+)-(.+)/);
        if (topicMatch) {
          const topicNum = topicMatch[1];
          const topicName = topicMatch[2].replace('.md', '');
          schedule[`Topic ${topicNum}: ${parsed.frontmatter.title}`] = `${extractLectureInfo(parsed.content)}`;
        }
      }
    });
  } catch (error) {
    console.error('❌ Error reading modules:', error.message);
  }
  
  return schedule;
}

// Function to extract lecture information from content
function extractLectureInfo(content) {
  const lectureMatches = content.match(/Lecture \d+:/g);
  if (lectureMatches) {
    const firstLecture = lectureMatches[0].replace('Lecture ', '').replace(':', '');
    const lastLecture = lectureMatches[lectureMatches.length - 1].replace('Lecture ', '').replace(':', '');
    return `Lectures ${firstLecture}-${lastLecture}`;
  }
  return 'Lectures';
}

// Function to extract topics from topic modules
function extractTopics() {
  const modulesDir = path.join(__dirname, '..', '_modules');
  const topics = [];
  
  try {
    const files = fs.readdirSync(modulesDir);
    const topicFiles = files.filter(file => file.startsWith('topic-') && file.endsWith('.md'));
    
    topicFiles.sort().forEach(file => {
      const filePath = path.join(modulesDir, file);
      const parsed = parseMarkdownFile(filePath);
      
      if (parsed && parsed.frontmatter.topics) {
        topics.push(...parsed.frontmatter.topics);
      } else if (parsed && parsed.frontmatter.title) {
        topics.push(parsed.frontmatter.title);
      }
    });
  } catch (error) {
    console.error('❌ Error extracting topics:', error.message);
  }
  
  return [...new Set(topics)]; // Remove duplicates
}

// Function to extract resources from _config.yml
function extractResources() {
  const configPath = path.join(__dirname, '..', '_config.yml');
  try {
    const content = fs.readFileSync(configPath, 'utf8');
    const resources = {};
    
    // Extract aux_links section
    const auxLinksMatch = content.match(/aux_links:\s*\n([\s\S]*?)(?=\n\S|$)/);
    if (auxLinksMatch) {
      const auxLinksContent = auxLinksMatch[1];
      const lines = auxLinksContent.split('\n');
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line && !line.startsWith('#')) {
          const nameMatch = line.match(/^(\w+):/);
          if (nameMatch) {
            const name = nameMatch[1];
            const nextLine = lines[i + 1]?.trim();
            if (nextLine && nextLine.startsWith('-')) {
              const url = nextLine.replace('-', '').replace(/'/g, '').trim();
              resources[name.toLowerCase()] = url;
            }
          }
        }
      }
    }
    
    return resources;
  } catch (error) {
    console.error('❌ Error extracting resources:', error.message);
    return {
      discord: "https://discord.gg/c9J8JH4M",
      gradescope: "https://www.gradescope.com/courses/961268",
      github: "https://github.com/gallettilance/CS506-Spring2025",
      medium: "https://medium.com/@gallettilance/list/data-science-notes-6f89a235c9bf",
      youtube: "https://youtube.com/@howithinkabout"
    };
  }
}

// Function to extract FAQ from _data/faq.yml
function extractFAQ() {
  const faqPath = path.join(__dirname, '..', '_data', 'faq.yml');
  const faq = [];
  
  try {
    if (fs.existsSync(faqPath)) {
      const content = fs.readFileSync(faqPath, 'utf8');
      const yaml = require('js-yaml');
      const faqData = yaml.load(content);
      
      faqData.forEach(item => {
        faq.push({
          question: item.question,
          answer: item.answer,
          category: item.category,
          tags: item.tags || []
        });
      });
    }
  } catch (error) {
    console.error('❌ Error reading FAQ:', error.message);
  }
  
  return faq;
}

// Function to extract semester information
function extractSemesterInfo() {
  const semesterPath = path.join(__dirname, '..', '_data', 'semester.yml');
  
  try {
    if (fs.existsSync(semesterPath)) {
      const content = fs.readFileSync(semesterPath, 'utf8');
      const yaml = require('js-yaml');
      return yaml.load(content);
    }
  } catch (error) {
    console.error('❌ Error reading semester info:', error.message);
  }
  
  return {
    semester_info: {
      name: "Spring 2025",
      duration_weeks: 12
    },
    important_dates: {},
    topic_duration: {}
  };
}

// Function to extract labs from _labs directory
function extractLabs() {
  const labsDir = path.join(__dirname, '..', '_labs');
  const labs = [];
  
  try {
    if (fs.existsSync(labsDir)) {
      const files = fs.readdirSync(labsDir);
      const labFiles = files.filter(file => file.endsWith('.md') && !file.includes('solution'));
      
      labFiles.forEach(file => {
        const filePath = path.join(labsDir, file);
        const parsed = parseMarkdownFile(filePath);
        
        if (parsed && parsed.frontmatter.title) {
          labs.push({
            title: parsed.frontmatter.title,
            content: parsed.content,
            metadata: {
              lab_number: parsed.frontmatter.lab_number,
              topics: parsed.frontmatter.topics || [],
              difficulty: parsed.frontmatter.difficulty || 'beginner',
              estimated_time: parsed.frontmatter.estimated_time || '2-3 hours',
              learning_objectives: parsed.frontmatter.learning_objectives || []
            }
          });
        }
      });
    }
  } catch (error) {
    console.error('❌ Error reading labs:', error.message);
  }
  
  return labs;
}

// Function to extract lab solutions from _lab_solutions directory
function extractLabSolutions() {
  const solutionsDir = path.join(__dirname, '..', '_lab_solutions');
  const solutions = [];
  
  try {
    if (fs.existsSync(solutionsDir)) {
      const files = fs.readdirSync(solutionsDir);
      const solutionFiles = files.filter(file => file.endsWith('.md') && file.includes('solution'));
      
      solutionFiles.forEach(file => {
        const filePath = path.join(solutionsDir, file);
        const parsed = parseMarkdownFile(filePath);
        
        if (parsed && parsed.frontmatter.title) {
          solutions.push({
            title: parsed.frontmatter.title,
            content: parsed.content,
            metadata: {
              lab_number: parsed.frontmatter.lab_number,
              topics: parsed.frontmatter.topics || [],
              difficulty: parsed.frontmatter.difficulty || 'beginner',
              solution_type: parsed.frontmatter.solution_type || 'complete',
              learning_objectives: parsed.frontmatter.learning_objectives || []
            }
          });
        }
      });
    }
  } catch (error) {
    console.error('❌ Error reading lab solutions:', error.message);
  }
  
  return solutions;
}

// Function to extract student notes from student_notes directory
function extractStudentNotes() {
  const notesDir = path.join(__dirname, '..', 'student_notes');
  const studentNotes = [];
  
  try {
    if (fs.existsSync(notesDir)) {
      const files = fs.readdirSync(notesDir);
      const noteFiles = files.filter(file => file.endsWith('.md') && file !== 'README.md');
      
      noteFiles.forEach(file => {
        const filePath = path.join(notesDir, file);
        const parsed = parseMarkdownFile(filePath);
        
        if (parsed && parsed.frontmatter.title) {
          studentNotes.push({
            title: parsed.frontmatter.title,
            content: parsed.content,
            metadata: {
              student_name: parsed.frontmatter.student_name || 'A student',
              topic: parsed.frontmatter.topic || 'General',
              difficulty_level: parsed.frontmatter.difficulty_level || 'beginner'
            }
          });
        }
      });
    }
  } catch (error) {
    console.error('❌ Error reading student notes:', error.message);
  }
  
  return studentNotes;
}

// Main function to generate course knowledge
function generateCourseKnowledge() {
  console.log('📚 Extracting course information...');
  const courseInfo = extractCourseInfo();
  
  console.log('📅 Extracting schedule...');
  const schedule = extractSchedule();
  
  console.log('🎯 Extracting topics...');
  const topics = extractTopics();
  
  console.log('🔗 Extracting resources...');
  const resources = extractResources();
  
  console.log('❓ Extracting FAQ...');
  const faq = extractFAQ();
  
  console.log('📝 Extracting student notes...');
  const studentNotes = extractStudentNotes();
  
  console.log('🧪 Extracting labs...');
  const labs = extractLabs();
  
  console.log('🔬 Extracting lab solutions...');
  const labSolutions = extractLabSolutions();
  
  console.log('📅 Extracting semester information...');
  const semesterInfo = extractSemesterInfo();
  
  const courseKnowledge = {
    courseInfo,
    schedule,
    topics,
    resources,
    faq,
    studentNotes,
    labs,
    labSolutions,
    semesterInfo
  };
  
  // Write to course_knowledge.json
  const outputPath = path.join(__dirname, '..', 'course_knowledge.json');
  fs.writeFileSync(outputPath, JSON.stringify(courseKnowledge, null, 2));
  
  console.log('✅ Course knowledge generated successfully!');
  console.log(`📊 Summary:`);
  console.log(`   - Course: ${courseInfo.name}`);
  console.log(`   - Schedule: ${Object.keys(schedule).length} topics`);
  console.log(`   - Topics: ${topics.length} topics`);
  console.log(`   - Resources: ${Object.keys(resources).length} resources`);
  console.log(`   - FAQ: ${faq.length} questions`);
  console.log(`   - Student Notes: ${studentNotes.length} notes`);
  console.log(`   - Labs: ${labs.length} labs`);
  console.log(`   - Lab Solutions: ${labSolutions.length} solutions`);
  console.log(`   - Semester: ${semesterInfo.semester_info.name} (${semesterInfo.semester_info.duration_weeks} weeks)`);
  console.log(`📄 Written to: ${outputPath}`);
}

// Run the generator
generateCourseKnowledge(); 