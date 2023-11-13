import Container from '../atoms/Container/container'
import Heading from '../atoms/Heading/Heading'
import '@/assets/css/ceucourse.css'
import Paragraph from '../atoms/Paragraph/Paragraph'
import React, { useState } from 'react';

import CCoaches from '../organism/ccoaches'



function ceucoursespage() {
  const courseheading = 'cour-head text-center p-6';
  const membermain = 'courses-teams text-center mt-6 gap-3';
  


const teamslides = [
  {
    title: 'FARM TO SCHOOL',
    imagetitle: 'FARM TO SCHOOL',
    description: 'Do you want to start a farm to school program but not sure how? In this coaching series attendees will learn how to cultivate their farm to school program, establish a farm to school team, learn how to properly procure local foods and learn how to bring farm to school to life in the cafeteria. Amanda owns Train Yard 317, a functional fitness gym...',
    image: '/images/ceu1.jpg',
    trainingTopics: [
      'KEY AREA: 3000 ADMINISTARTION',
      'LEARNING OBJECTIVE: 2500- RECEIVING & STORAGE',
      'LEARNING OBJECTIVE: 3200 PROGRAM MANAGEMENT TRAINING TOPIC: 3230 HEALTHY SCHOOL AENVIRONMENT',
      '0.5 CEU CREDIT',
    ],
  },
  {
    title: 'LET`S GET ORGANIZED ',
    imagetitle: 'LET`S GET ORGANIZED',
    description: ' In this coaching series attendees will learn simple ways to create an efficient flow to their storage rooms and walk in coolers.        ',
    image: '/images/ceu2.jpg',
    trainingTopics: [
      'KEY AREA: 2000- OPERATIONS',
      'LEARNING OBJECTIVE: 2500- RECEIVING & STORAGE',
      'TRAINING TOPIC: 2520- RECEIVING & STORAGE',
      '1 CEU CREDIT',
    ],
  },
  {
    title: 'SAFETY FIRST!',
    imagetitle: 'SAFETY FIRST!      ',
    description: ' Let us introduce you to the basics of HACCP, knife safety, special diets and cross contamination. These lessons are also a great refresher for directors who are looking to update their HACCP manual.      ',
    image: '/images/ceu3.jpg',
    trainingTopics: [
      'KEY AREA: 2000- OPERATIONS',
      'LEARNING OBJECTIVE: 2100- FOOD PRODUCTION TRAINING TOPIC: 2620- FOOD SAFETY GENERAL',
      'TRAINING TOPIC: 2520- RECEIVING & STORAGE',
      '1 CEU CREDIT',
    ],
  },
  {
    title: 'CRITICAL ISSUES FACING CHILD NUTRITION',
    imagetitle: 'OVERCOMING CRITICAL ISSUES FACING CHILD NUTRITION      ',
    description: 'Gain insight and perspective from thought leaders on issues facing child nutrition professionals today. Listen in as we discuss ways to overcome supply chain and staffing issues. Make your team stronger with strategies to adapt to change, communicate effectively and recognize leadership qualities.       ',
    image: '/images/ceu4.jpg',
    trainingTopics: [
      'KEY AREA: 3000 ADMINISTRATION',
      'LEARNING OBJECTIVE: 3200',
      'PROCRAM MANAGEMENT TRAINING TOPIC: 3210- LEADERSHIP PRINCIPLES',
    ],
  },
  {
    title: 'GREENING YOUR OPERATION',
    imagetitle: 'GREENING YOUR OPERATION      ',
    description: 'This series concentrates on environmental sustainability. In this coaching series, we will cover areas in their operations that can be altered to improve the quality of the environment.   ',
    image: '/images/ceu5.jpg',
    trainingTopics: [
      'KEY AREA: 3000 ADMINISTRATION',
      'LEARNING OBJECTIVE: 3200- PROGRAM MANAGEMENT TRAINING TOPIC: 3250- GREEN SCHOOLS',
      '1 CEU CREDIT',
    ],
  },
  {
    title: 'CIVIL RIGHTS ',
    imagetitle: 'CIVIL RIGHTS',
    description: ' The information we will cover in this course will include Collection and Use of Data, Effective Public Notification Systems, Complaint Procedures, Compliance Review Techniques, Resolution of Non-Compliance, Requirements for Reasonable Accommodations for Persons with Disabilities, Requirements for Language Assistance, Conflict Resolution and last but certainly not least, Customer Service.   ',
    image: '/images/ceu6.jpg',
    trainingTopics: [
      'KEY AREA: 3000- ADMINISTRATION',
      'KEY AREA: 3000- ADMINISTRATION        ',
      'LEARNING OBJECTIVE: 3400- HUMAN RESOURCES TRAINING TOPIC: 3420- CIVIL RIGHTS TRAINING        ',
      '1 CEU CREDIT',
    ],
  },
  {
    title: 'DEALING WITH YOUR PESKY PERSON      ',
    imagetitle: 'DEALING WITH YOUR PESKY PERSON      ',
    description: 'This session will teach three powerful transformational reasons we need to create collaborative partnerships with our pesky person. Attendees will learn how to create 3D relationships with others who see, hear and feel the world differently from themselves.       ',
    image: '/images/ceu7.jpg',
    trainingTopics: [
      'KEY AREA: 3000 ADMINISTARTION',
      'LEARNING OBJECTIVE: 3400- HUMAN RESOURCES TRAINING TOPIC: 3410- DEALING WITH DIFFICULT        ',
      '1.25 CEU CREDIT',
    ],
  },
  {
    title: 'INSPIRING GROWTH      ',
    imagetitle: 'INSPIRING GROWTH      ',
    description: 'Learn about the importance of developing a mindset for growth, identify five key areas to encourage team growth and receive applicable skills to implement immediately. Through relevant examples and real-life applications, attendees will develop a mindset for growth to maximize their potential.      ',
    image: '/images/ceu8.jpg',
    trainingTopics: [
      'KEY AREA: 3000 ADMINISTARTION',
      'LEARNING OBJECTIVE: 3400- HUMAN RESOURCES TRAINING TOPIC: 3440- RETENTION, PROMOTION, AND RECOGNITION        ',
      '1.25 CEU CREDIT',
    ],
  },
  {
    title: 'HEALTHY LIVING FOR BUSY PROFESSIONALS      ',
    imagetitle: 'HEALTHY LIVING FOR BUSY PROFESSIONALS      ',
    description: 'Has your world sped up in the past year leaving little time for healthy living? In this coaching series attendees will be encouraged to make permanent changes to improve their diet and increase their physical activity in a sustainable way.    ',
    image: '/images/ceu9.jpg',
    trainingTopics: [
      'KEY AREA: 3000 ADMINISTARTION',
      'LEARNING OBJECTIVE: 3400- HUMAN RESOURCES TRAINING TOPIC: 3450- PERSONAL HEALTH        ',
      '1.25 CEU CREDIT',
    ],
  },
  {
    title: 'SELF AWARENESS',
    imagetitle: 'LIVING YOUR BEST LIFE THROUGH SELF AWARENESS      ',
    description: 'Do you struggle with controlling your emotions or identifying your strengths? In this coaching series you will learn what self awareness is and its benefits. We will explore how to boost self awareness and manage strengths and weaknesses that accelerate professional growth.      ',
    image: '/images/ceu10.jpg',
    trainingTopics: [
      'KEY AREA: 3000 ADMINISTARTION',
      'LEARNING OBJECTIVE: 3400 HUMAN RESOURCES TRAINING TOPIC: 3450- EMPLOYEE HEALTH        ',
      '1 CEU CREDIT',
    ],
  },
  {
    title: 'NOURISH YOUR HEALTH ',
    imagetitle: 'NOURISH YOUR HEALTH',
    description: 'The nourish your health series will empower you to take back your health so that you can be the best version of you at work and at home. Health is emotional, spiritual, physical, and mental. Learn more about intuitive eating, growth mindset, and how to begin your wellness journey where you are.      ',
    image: '/images/ceu11.jpg',
    trainingTopics: [
      'KEY AREA: 3000 ADMINISTARTION',
      'LEARNING OBJECTIVE: 3400 - HUMAN RESOURCES TRAINING TOPIC: 3450- EMPLOYEE HEALTH',
      '1.25 CEU CREDIT',
    ],
  },
  {
    title: 'SCHOOL NUTRITION THROUGH THE LENSE OF BUSINESS',
    imagetitle: 'SCHOOL NUTRITION THROUGH THE LENSE OF BUSINESS',
    description: ' In this coaching series attendees will learn about the art of  leadership, the four basic functions of business and the five senses of  customer service and food merchandising. Attendees will leave these  sessions feeling inspired and equipped to lead the way in school  nutrition as a professional.      ',
    image: '/images/ceu12.jpg',
    trainingTopics: [
      'KEY AREA: 4000 COMMUNICATIONS & MARKETING',
      'LEARNING OBJECTIVE: 4100- COMMUNICATIONS & MARKETING TRAINING TOPIC: 4120 PROGRAM PROMOTION',
      '1 CEU CREDIT',
    ],
  },
  {
    title: 'SCHOOL NUTRITION 101',
    imagetitle: 'SCHOOL NUTRITION 101',
    description: 'In this course we will learn the fundamentals of school nutrition. We will cover the history of school nutrition, learning the alphabet soup of school nutrition acronyms, recognizing reimbursable meals, counting and claiming, production records and inventory management.      ',
    image: '/images/ceu13.jpg',
    trainingTopics: [
      'KEY AREA: 3000 ADMINISTARTION',
      'LEARNING OBJECTIVE, 3200- PROGRAM MANAGEMENT TRAINING TOPIC, 3220- STANDARDIZED OPERATING',
      '1.25 CEU CREDIT',
    ],
  },
  {
    title: 'TIME MANAGMENT',
    imagetitle: 'TIME MANAGMENT',
    description: 'Time is money, the saying goes, and a lot of it gets lost in disorganization and disruption. We also deal with a constant barrage of technology, people, and tasks that can contribute to that disorganization.  Learn how to make the most of your time by getting a grip on your workflow and office space, using your planner effectively, and delegating some of your work.      ',
    image: '/images/ceu14.jpg',
    trainingTopics: [
      'KEY AREA: 3000 ADMINISTARTION',
      'LEARNING OBJECTIVE SA00 HUMAN RESOURCES TRAINING TOPIC: 3410 TIME MANAGEMENT',
      '1 CEU CREDIT',
    ],
  },
  {
    title: 'ANGER MANAGEMENT',
    imagetitle: 'ANGER MANAGEMENT',
    description: 'Recognize how anger affects your body, your mind, and your behavior. Use the five-step method to break old patterns and replace them with a model for assertive anger.  Use an anger log to identify your hot buttons and triggers. Control your own emotions when faced with other peoples’ anger. Identify ways to help other people safely manage some of their repressed or expressed anger.       ',
    image: '/images/ceu15.jpg',
    trainingTopics: [
      'KEY AREA: 3000 ADMINISTARTION',
      'LEARNING OBJECTIVE: 3400 HUMAN RESOURCES TRAINING TOPIC 3410- EMPLOYEE CONCERNS',
      '.75 CEU CREDIT',
    ],
  },
  {
    title: 'CONFLICT RESOLUTION ',
    imagetitle: 'CONFLICT RESOLUTION ',
    description: 'Conflict is a necessary part of our personal growth and development. Conflict becomes an issue when the people involved cannot work through it. They become engaged in a battle that does not result in growth. When this type of conflict arises, negative energy can result, causing hurt feelings and damaged relationships. This  course will give participants the tools that will help you resolve conflict successfully and produce a win-win outcome.      ',
    image: '/images/ceu16.jpg',
    trainingTopics: [
      'KEY AREA: 3000 ADMINISTARTION',
      'LEARNING OBJECTIVE: 3400 HUMAN RESOURCES TRAINING TOPICI 3410- CONFLICT MANAGEMENT',
      '1 CEU CREDIT',
    ],
  },
  {
    title: 'GENERATIONAL DIVERSITY IN THE WORKPLACE',
    imagetitle: 'GENERATIONAL DIVERSITY ',
    description: 'This course examines the history and reality of the generation gap in the workplace. In it, we will explore whether defining the actual limits of each generation is most important, or whether the merits of people within the context of employment is the bigger issue. After all, understanding others helps us to understand ourselves and to manage the people that we work with. We will also explore problems, solutions, and strategies to help overcome issues of the generation gap.       ',
    image: '/images/ceu17.jpg',
    trainingTopics: [
      'KEY AREA: 3000 ADMINISTARTION',
      'LEARNING OBJECTIVE 3200 PROGRAM MANAGEMENT TRAINING TOPIC 3210 STAFF MANAGEMENT ',
      '0.5 CEU CREDIT',
    ],
  },
  {
    title: 'WHAT MOTIVATES YOU? ',
    imagetitle: 'WHAT MOTIVATES YOU?',
    description: 'Deep down, what motivates you? What aspects of your life are most meaningful to you? What goals drive your behavior?  Join FIG in understanding the 16 basic principles that drive us all, and gain a better understanding of why people do the things they do.   Apply these principles in your daily life and change everything for yourself!      ',
    image: '/images/ceu18.jpg',
    trainingTopics: [
      'KEY AREA: 3000 ADMINISTARTION',
      'LEARNING OBJECTIVE: 3400 HUMAN RESOURCES AND STAFF TRAINING',
      'TRAINING TOPIC 3410 PERSONNEL MANAGMENT        ',
      '50 CEU CREDIT',
      'motivation',
    ],
  },
  {
    title: 'CRITICAL ELEMENTS OF CUSTOMER SERVICE',
    imagetitle: 'CRITICAL ELEMENTS OF CUSTOMER SERVICE',
    description: 'While Many Companies And Organizations Promise To Deliver An Incredible Customer Experience, Some Are Better At Supplying This Than Others. This Course Is Designed Around Six Critical Elements Of Customer Service That, When An Organization Truly Embraces Them, Bring Customers Back To Experience Service That Outdoes The Competition.      ',
    image: '/images/ceu19.jpg',
    trainingTopics: [
      'KEY AREA 4000 COMMUNICATIONS AND MARKETING',
      'LEARNING OBJECTIVE 4100 COMMUNICATIONS AND MARKETING',
      'TRAINING TOPIC: 4130 - CUSTOMER SERVICE',
      '1 CEU CREDIT',
    ],
  },
  {
    title: 'GETTING THE MOST OUT OF LAC',
    imagetitle: 'GETTING THE MOST OUT OF LAC',
    description: 'This Video Will Tell You Everything You Need To Know When Preparing To Go To LAC And Advocate For School Nutrition. Chris Has Attended Over 25 LAC Events Over The Years And Shares A Wealth Of Knowledge On Everything From How To Find Out Who Your Representatives Are To What To Talk About When You Are Finally In Front Of Them And Best Practices For Follow Up. This Course Is Perfect For First Timers As Well As A Refresher For The Seasoned Professional.      ',
    image: '/images/ceu20.jpg',
    trainingTopics: [
      'KEY AREA 4000 COMMUNICATIONS AND MARKETING',
      'LEARNING OBJECTIVE: 4100 COMMUNICATIONS AND MARKETING',
      'TRAINING TOPIC: 4120 PROGRAM PROMOTION',
      '25 CEU CREDIT',
    ],
  },
  {
    title: 'MOTIVATION TRAINING',
    imagetitle: 'MOTIVATION TRAINING',
    description: 'This course is designed to help supervisors and managers create a more dynamic, loyal, and energized workplace. It is designed specifically to help busy managers and supervisors understand what employees want, and to give them a starting point for creating champions.      ',
    image: '/images/ceu21.jpg',
    trainingTopics: [
      'KEY AREA: 3000 ADMINISTARTION',
      'LEARNING OBJECTIVE: 3400 HUMAN RESOURCES & STAFF',
      'TRAINING TOPIC 3440 RETENTION, PROMOTION & RECOGNITION',
      '5 CEU CREDIT',
    ],
  },
  {
    title: 'CHILD ABUSE MANDATED REPORTER TRAINING',
    imagetitle: 'CHILD ABUSE MANDATED REPORTER',
    description: 'In this course we go over what child abuse is  and what is expected of you as a mandated reporter.  We take a deeper dive into maltreatments such as Environmental Hazards , Family Violence threatens child , Inadequate supervision  , Physical Injury , Sexual Abuse , Medical Neglect , Substance Misuse , Human Trafficking , Death',
    image: '/images/ceu22.jpg',
    trainingTopics: [
      'KEY AREA: 3000 ADMINISTARTION',
      'Learning Objective 3400 Human Resources & Staff Training Training Topic: 3420 Policles/Procedures',
      '0.25 CEU CREDIT',
      'STOP',
      'CHILD ABUSE',
    ],
  },
  {
    title: 'FIG FOOD HANDLER PART ONE',
    imagetitle: 'FIG FOOD HANDLER PART ONE',
    description: ' This course is designed to teach you all about food safety and Helping to prevent a foodborne illness outbreak.  In this first course we will discuss an introduction to food safety.  We will review forms of contamination,  allergens and how to prevent cross contact. ',
    image: '/images/ceu23.jpg',
    trainingTopics: [
      'Key Area: 2000 Operations',
      'Learning Objective: 2600 Food Safety & HACCP Training Topic: 2620 Food Safety General',
      '1 CEU CREDIT',
    ],
  },

];


  return (
    <div>
      <section className='cours-sec'>
        <Container>
          <div className='inr-courses bg-[#fff] rounded-xl p-8'>
            <div className='text-center mt-4 mb-8'>
              <Heading fontsize='text-5xl' level='1'>SAMPLE COURSE LESSONS</Heading>
            </div>
            <div class="courses-colm flex items-center text-center gap-6 mt-12">
              <div class="cours-video">
                <div className='video-sc-nut'>
                  <iframe data-ux="Embed" allowfullscreen="" type="text/html" frameborder="0" src="//player.vimeo.com/video/813612074?h=7c5492d061&amp;autoplay=0&amp;title=0&amp;portrait=0&amp;byline=0&amp;badge=0" data-aid="VIDEO_VIDEO_RENDERED0" class="x-el x-el-iframe c2-1 c2-2 c2-1b c2-1c c2-1d c2-1e c2-1f c2-1g c2-1h c2-1i c2-1j c2-1k c2-15 c2-3 c2-4 c2-1l c2-5 c2-1m c2-6 c2-7 c2-8"></iframe>
                </div>
                <div className='p-6'>
                  <Heading fontsize='text-2xl mb-2' level='3'>FIG FOOD HANDLER - INTRO TO SAFETY</Heading>
                  <Paragraph>
                    In this lesson we introduce the basics of food handling safety. We lay the foundation to
                    prepare you for food handler certification as we discuss causes of foodborne illness
                    outbreaks and how to prevent them.
                  </Paragraph>
                </div>
              </div>
              <div class="cours-video">
                <div className='video-sc-nut'>
                  <iframe data-ux="Embed" allowfullscreen="" type="text/html" frameborder="0" src="//player.vimeo.com/video/716576261?h=bb040a0276&amp;autoplay=0&amp;title=0&amp;portrait=0&amp;byline=0&amp;badge=0" data-aid="VIDEO_VIDEO_RENDERED1" ></iframe>
                </div>
                <div className='p-6'>
                  <Heading fontsize='text-2xl mb-2' level='3'>MEAL COUNTING AND CLAIMING</Heading>
                  <Paragraph> In this lesson we will discuss Free and Reduced eligibilities, how to apply for benefits and
                    process applications as well as correct counting and claiming procedures to keep us in
                    compliance with FNS Guidelines.</Paragraph>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className='cours-team-mates w-full float-left mt-16'>
        <Container>
          <div className='inr-courses'>
            <div className={courseheading}>
              <Heading fontsize='text-5xl' level='1'>CEU COURSE CATALOG</Heading>
            </div>
            <div class={membermain}>
              <CCoaches slides={teamslides} />
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default ceucoursespage
