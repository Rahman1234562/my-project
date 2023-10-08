import React from 'react';
import style from '../styles/about.module.css'

const About = () => {
  return (
    <div className={style.container}>
      <h1 className={style.center}>About Problem Solving Coder</h1>
      <h2 className={style.intro}>Intruduction</h2>
      <p>our mission is to solve the problem on my online way to approve the biggner exprience
        this is great opertunity for biggner to sovle thier problem online Problem Solving Coder help them 
        to approve thier skill better 
      </p>
      <h2 className={style.contact}>Contact our member for online duscussion</h2>
      <p>Our aim to solve the coder probelm chat with our member online to ask them for any confusion 
        that you are face
      </p>
      <h2 className={style.service}>Our services</h2>
      <p>Our services Provide bellow</p>
      <ul>
        <li>Debuggin</li>
        <li>cleaning code</li>
        <li>bag idea about coding</li>
        <li>also you can ask for any confucion</li>
      </ul>
    </div>
  )
}

export default About;