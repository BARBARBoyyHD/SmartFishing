import React from 'react';
import './AboutUS.css';

function AboutUs() {
  const teamMembers = [
    { id: 1, name: 'M.Alfito Naufal',nim:'10121043' ,role: 'UI Designer' },
    { id: 2, name: 'Muhammad Hasan',nim:'10121047' ,role: 'Programmer' },
    { id: 3, name: 'Ferdiansyah Sukarya', nim:'10121068',role: 'Programmer,Fron-End' },
    { id: 4, name: 'M. Andre Aria Saputra',nim:'10121072' ,role: 'Programmer' },
    { id: 5, name: 'M.Nahrul Hayat', nim:'10121074',role: 'Programmer,Front-End' }
    // Add more team members as needed
  ];

  return (
    <div className='about-us-container'>
      <h2>About Us</h2>
      <p>Welcome to our website! We are a passionate team dedicated to providing valuable information and content to our users.</p>
      <p>Meet our awesome team:</p>
      <ul>
        {teamMembers.map(member => (
          <li key={member.id}>
            <strong>{member.name}</strong> - {member.nim} - <strong>{member.role}</strong>
          </li>
        ))}
      </ul>
      <p>Our mission is to make learning and exploring enjoyable for everyone, and we strive to create a positive and engaging experience on our platform.</p>
      <p>Feel free to explore the various sections of our website and discover the wealth of knowledge we have to offer. Thank you for being a part of our community!</p>
    </div>
  );
}

export default AboutUs;
