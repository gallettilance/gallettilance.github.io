#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🧪 Testing generated course knowledge...');

function testCourseKnowledge() {
  const knowledgePath = path.join(__dirname, '..', 'course_knowledge.json');
  
  try {
    // Read the generated knowledge
    const content = fs.readFileSync(knowledgePath, 'utf8');
    const knowledge = JSON.parse(content);
    
    console.log('✅ Course knowledge file exists and is valid JSON');
    
    // Test required fields
    const requiredFields = ['courseInfo', 'schedule', 'topics', 'resources', 'faq', 'studentNotes'];
    const missingFields = requiredFields.filter(field => !knowledge[field]);
    
    if (missingFields.length > 0) {
      console.error(`❌ Missing required fields: ${missingFields.join(', ')}`);
      return false;
    }
    
    console.log('✅ All required fields present');
    
    // Test course info
    const courseInfo = knowledge.courseInfo;
    if (!courseInfo.name || !courseInfo.instructor) {
      console.error('❌ Course info missing required fields');
      return false;
    }
    
    console.log(`✅ Course info: ${courseInfo.name} by ${courseInfo.instructor}`);
    
    // Test schedule
    const schedule = knowledge.schedule;
    if (Object.keys(schedule).length === 0) {
      console.error('❌ Schedule is empty');
      return false;
    }
    
    console.log(`✅ Schedule: ${Object.keys(schedule).length} topics`);
    
    // Test topics
    const topics = knowledge.topics;
    if (topics.length === 0) {
      console.error('❌ Topics list is empty');
      return false;
    }
    
    console.log(`✅ Topics: ${topics.length} topics`);
    
    // Test resources
    const resources = knowledge.resources;
    if (Object.keys(resources).length === 0) {
      console.error('❌ Resources are empty');
      return false;
    }
    
    console.log(`✅ Resources: ${Object.keys(resources).length} resources`);
    
    // Test FAQ
    const faq = knowledge.faq;
    if (!Array.isArray(faq)) {
      console.error('❌ FAQ is not an array');
      return false;
    }
    
    console.log(`✅ FAQ: ${faq.length} questions`);
    
    // Test student notes
    const studentNotes = knowledge.studentNotes;
    if (!Array.isArray(studentNotes)) {
      console.error('❌ Student notes is not an array');
      return false;
    }
    
    console.log(`✅ Student notes: ${studentNotes.length} notes`);
    
    // Test student note structure
    for (const note of studentNotes) {
      if (!note.title || !note.content || !note.metadata) {
        console.error('❌ Student note missing required fields');
        return false;
      }
      
      if (!note.metadata.student_name || !note.metadata.topic) {
        console.error('❌ Student note metadata missing required fields');
        return false;
      }
    }
    
    console.log('✅ All student notes have proper structure');
    
    // Test labs
    const labs = knowledge.labs;
    if (!labs || !Array.isArray(labs)) {
      console.error('❌ Labs field missing or not an array');
      return false;
    }
    
    console.log(`✅ Labs: ${labs.length} labs`);
    
    // Test lab solutions
    const labSolutions = knowledge.labSolutions;
    if (!labSolutions || !Array.isArray(labSolutions)) {
      console.error('❌ Lab solutions field missing or not an array');
      return false;
    }
    
    console.log(`✅ Lab solutions: ${labSolutions.length} solutions`);
    
    // Test semester info
    const semesterInfo = knowledge.semesterInfo;
    if (!semesterInfo || !semesterInfo.semester_info) {
      console.error('❌ Semester info missing');
      return false;
    }
    
    console.log(`✅ Semester: ${semesterInfo.semester_info.name} (${semesterInfo.semester_info.duration_weeks} weeks)`);
    
    console.log('\n🎉 All tests passed! Course knowledge is valid and complete.');
    return true;
    
  } catch (error) {
    console.error('❌ Error testing course knowledge:', error.message);
    return false;
  }
}

// Run the test
const success = testCourseKnowledge();
process.exit(success ? 0 : 1); 