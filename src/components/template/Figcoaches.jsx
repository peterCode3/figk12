import React from 'react'
import Container from '../atoms/Container/container'
import Heading from '../atoms/Heading/Heading'
import '@/assets/css/ceucourse.css'
import '@/assets/css/lifestyle.css'
import '@/assets/css/teammate.css'
import Paragraph from '../atoms/Paragraph/Paragraph'
import TeamSlider from '../organism/teamslider'
import CustomImage from '../atoms/CustomImage/CustomImage'

function figcoaches() {

  const teammates = 'team-mates';
  const inrteammates = 'inrteam-mates';

  const slides = [
    {
      name: 'ASHLEY MORENA',
      role: '',
      description: 'Ashley Morena has been the Nutrition Services and Wellness Director for Canton Local schools since 2016. She has served on the executive board for SNA Ohio and serves as the President of S.A.N.D Chapter 43(Supervisors and Nutrition Directors) of NorthEast Ohio.Ashley is the Founder and CEO of Project School Nutrition.She is called mom by three boys and loves to read and go to yoga classes in her free time.',
      image: '/images/team1.webp'
    },
    {
      name: 'BECKI SWAN',
      role: '',
      description: 'Becki Swan has been a part of the school nutrition community since 2010. She is the owner of FIG K12 and is passionate about helping others grow into their best self to reach their top potential. In addition to FIG K12, Becki and her husband, Dusty, also own Swan Solutions where they focus on technology consulting. Together Becki and Dusty have 2 boys, Alex and Lincoln. They live in Pensacola, Florida and love enjoying the sunshine and beach and scuba diving as a family.',
      image: '/images/team2.webp'
    },
    {
      name: 'CLAUDIA SIMION',
      role: '',
      description: 'Claudia is currently the Café Operations Specialist for the Brownsburg School Corporation in Indiana. She oversees the training program for the Food Department employees including the temps, regular employees, assistants and managers. Claudia has launched several successful programs in the schools, engaged the teachers and students and has been recognized as the employee of the year on multiple occasions.',
      image: '/images/team3.webp'
    },
    {
      name: 'DALIA KINSEY',
      role: '',
      description: 'Dalia Kinsey is a Registered Dietitian, Inclusive Employee Wellness Specialist, and podcaster. When she isn`t tinkering with new apps or hanging out on social media, she`s hiking, watching sci-fi, or hanging out at a cat cafe.',
      image: '/images/team4.webp'
    },
    {
      name: 'GLORIA DAVIS',
      role: '',
      description: ' Gloria Davis Browning, MEd, RDN, SNS is a consultant dietitian in San Diego County, CA. She has earned an Associate`s in Culinary Arts from the Culinary Institute of America, a Bachelor`s in Dietetics and Food Administration with a minor in Hospitality Management from California State University, Long Beach, and a Master`s in Nutrition Education through Framingham State University`s distance program. Her dietetic internship was also completed through a distance program at Iowa State University, during which she obtained her School Nutrition Specialist certification. She has professional experience in a number of areas of hospitality and nutrition, including school and hospital foodservice, eating disorder treatment, restaurant management, and nutrition education. She is the Secretary for the California Academy of Nutrition and Dietetics, San Diego board and is interested in culinary medicine, nutritional psychology, and diversifying dietetics. ',
      image: '/images/team5.webp'
    },
    {
      name: 'ISAIAH RUFFIN',
      role: '',
      description: 'Chef Isaiah Ruffin was named after his Great Grandfather, a World War I Army veteran. Currently, he is a personal chef in the D.C Metro area and Ph.D. Candidate studying the correlation between food literacy and academic achievement in third graders. He is a strong believer that if we are going to do something right it will not be easy. He is someone who does everything with the people and planet in mind.',
      image: '/images/team6.webp'
    },
    {
      name: 'JANICE WATT',
      role: '',
      description: 'Janice Watt, SNS, is a Gallup Certified Strengths Coach and school nutrition director since 1997, is currently the food service director for the Foxborough, Mass., Public Schools. Her personal mission statement and purpose has always been to help elevate the school nutrition profession. As a strength coach, she loves to help individuals and teams understand and appreciate their personal strengths to help them become the best versions of themselves.  Janice has volunteered on the School Nutrition Association of Massachusetts board for several years, as delegate, membership chair, vice president, president- elect and president.  Janice was also named the 2011 SNA of Massachusetts Director of the Year. She holds an associate’s degree in Culinary Arts and bachelor degree in Food Service Management from Johnson and Wales University. ',
      image: '/images/team7.webp'
    },
    {
      name: 'JOE PETTIT',
      role: '',
      description: 'Joe Pettit is a leadership and goal setting expert who delivers inspiring and engaging keynote presentations that challenge audiences to leverage their potential and achieve more at work and in life. Audiences love his practical strategies they can apply personally and professionally. As someone who overcame a 16- year alcohol and drug addiction, Joe brings unique perspectives gained from his experience, empowering each person to unleash their untapped potential as they “pull the weeds and plant the seeds”. Using real-world and practical examples, Joe sheds light on how the invaluable talent each person brings to your organization can positively impact your mission and their life. ',
      image: '/images/team8.webp'
    },
    {
      name: 'MATT UPTON',
      role: '',
      description: 'Joe Pettit is a leadership and goal setting expert who delivers inspiring and engaging keynote presentations that challenge audiences to leverage their potential and achieve more at work and in life. Audiences love his practical strategies they can apply personally and professionally. As someone who overcame a 16- year alcohol and drug addiction, Joe brings unique perspectives gained from his experience, empowering each person to unleash their untapped potential as they “pull the weeds and plant the seeds”. Using real-world and practical examples, Joe sheds light on how the invaluable talent each person brings to your organization can positively impact your mission and their life. ',
      image: '/images/team9.webp'
    },
    {
      name: 'NICOLE RYAN SUPPES',
      role: '',
      description: 'Nicole Ryan Suppes is a Registered Dietitian Nutritionist and Founder of Good Soul Nutrition, a nutrition practice that empowers others with practical tools to improve their health and change their life. After working in the K-12 sector as both a dietetic consultant and Nutrition Services Director, Nicole has multiple years of experience in creating nutritious recipes for students that not only meet but exceed the  guidelines. She is incredibly passionate about empowering other K-12 directors and staff members on not only the "what" but the "why" behind the nutrition standards. She also believes that movement and nutrition go hand in hand, which is why she decided to embark on the journey of becoming a Certified Yoga Instructor. At the core, she firmly believes in the power of the positive impact that optimal nutrition and wellness has on the life of each and every person. She makes it a goal  to continuously strive to place this belief at the forefront of the services she provides.',
      image: '/images/team10.webp'
    },
    {
      name: 'CHRIS KAMRADT',
      role: '',
      description: 'Chris served more than 28 years in the school nutrition industry in several school districts across Texas and the Region 10 Service Center in Dallas, TX. He spent the last 18 years of his career serving as the Director of Child Nutrition Services for Spring Branch ISD in Houston, TX. Chris is a proud graduate of Texas Tech University with a Bachelors of Science in Hotel, Restaurant, and Institutional Management. Chris held certifications from the Texas Association for School Nutrition (TASN) and was a certified School Nutrition Specialist (SNS) through the national School Nutrition Association (SNA).  He served many years on a multitude of TASN, SNA, and the Texas Association of School Business Officials ‘Task Force,’ research, and advisory committees.  Chris was also a proud member for many years on the Region 4 School Nutrition Advisory Committee of Southeast Texas and other local professional organizations.  Most proud to him, Chris was active for more than 20 years in legislative issues serving with both the TASN and SNA on Public Policy and Legislative Committees as a member and chair. Chris also holds a National Incident Management System (NIMS) certificate through the Department of Homeland Security, ServSafe certification, and City of Houston Health Certificates.  He continues to teach across the nation and throughout the State of Texas in many summer workshops, Management Academies, and other continuing educational training opportunities. Chris has been happily married for 32 years and has two, wonderful sons.',
      image: '/images/team11.webp'
    },
    {
      name: 'MARIE NELSON',
      role: '',
      description: '  Marie is a registered dietitian with foodservice operations and clinical experience early in her professional career. Marie currently leads the foodservice division for Lindy’s Homemade and is responsible for sales and marketing of Froot Jooce® Frozen Juice Cups. In the past 23 years, Marie has held various sales and marketing positions across the foodservice supply chain. Marie also held leadership roles in account management for contract food companies and group purchasing organizations. She also facilitated and led the strategic planning processes at for profit companies and several professional associations. Marie received the highest industry awards from the Association for Healthcare Foodservice (AHF) and the National Society for Healthcare Foodservice Managers (HFM) for her service and numerous leadership roles in both organizations. Marie is a member of the Academy of Nutrition and Dietetics, the School Nutrition Association, and the Senior Dining Association. Marie holds a bachelor’s degree in Dietetics from the University of Wisconsin-Stout and completed a Dietetic Internship at the University of Wisconsin Hospital and Clinics. She has also completed master’s level business and leadership courses during her foodservice career.',
      image: '/images/team12.webp'
    }
    // Add more slides as needed
  ];

  const teamslides = [
    {
      name: 'AMANDA O`DELL',
      role: '',
      description: 'Amanda owns Train Yard 317, a functional fitness gym. They offer many  different aspects of training from everyday fitness, calisthenics, obstacle course racing and  Ninja Warrior Training. In 2019 Amanda submitted an application and was chosen out of tens of  thousands of applicants to run the course on NBC’s hit show American Ninja Warrior. She had an  amazing experience and was given a feature spot on the show and The Lunch Lady Ninja was  born! Fitness and nutrition are her two passions with an emphasis on fitness for beginners and teaching people how to start their  journey and make it work for them.      ',
      image: '/images/team13.webp'
    },
    {
      name: 'ANGI DEMATTEIS',
      role: '',
      description: 'Angi DeMatteis, RMT is a Reiki Master Teacher working with healing energy since 2007. She specializes in intuitive Reiki Healing Energy Sessions facilitating spiritual growth and awakening in others. Offering in person and remote healing sessions, tarot card readings, astrology, and wellness workshops. Angi is co-owner of Inner Whisper Studio, a Halotherapy wellness center located in Canton Ohio.      ',
      image: '/images/team14.webp'
    },
    {
      name: 'KRISTEN SCHADE      ',
      role: '',
      description: 'Kristen is an animal lover, yogi, and crazy plant lady. She is the owner/operator of Kristen Schade Wellness that teaches yoga, breathwork, meditation, reiki, and sound healing. She has been teaching in a studio setting for about 7 years and has been practicing yoga longer than she can even remember. Kristen is currently RYT500 E-RYT200 and YACPA accredited by the yoga alliance. She loves to practice and teach a flowy style of yogic stretches that are available to all levels and specialize in helping students shine their brightest from the inside out.      ',
      image: '/images/team15.webp'
    },
    {
      name: 'LISA CAMP      ',
      role: '',
      description: 'Lisa teaches everything from Yoga to Zumba®, Barre to Cycling, Pilates to Strength and Conditioning, and HIIT to TRX… as well as teaching leadership workshops and classes! She holds a B.A. in Human Behavior from Skidmore College. She is also an ACE Certified Professional in both Group Fitness and Health Coaching, a Certified Personal Trainer, and a Lifestyle and Behavioral Change Coach.  Helping people discover their “why”, find the self-confidence they didn’t know existed and develop passion for improving their health, fitness and overall life is what makes her heart truly sing!         ',
      image: '/images/team16.webp'
    },
    {
      name: 'SIDNEY WARE',
      role: '',
      description: 'Sidney is a fitness enthusiast with a passion for educating and encouraging others to kick bad habits and learn to love the benefits of a healthy lifestyle. As a mom of two + twins, Sidney realized the importance of taking care of herself through fitness and decided to help others along the way. Sidney is a CrossFit Level 1 Trainer who in 2018 created a women’s only HIIT bootcamp class (LIT:FIT) at a local gym. During the Covid-19 pandemic, she formed a virtual platform for her clients to continue to work-out through the global shut down that she continues to coach today. Sidney is passionate about making fitness fun and making your health and wellness a priority.',
      image: '/images/team17.webp'
    },
    {
      name: 'SUNI MOON',
      role: '',
      description: 'Suni Moon is a freelance writer, artist, coach and a meditation teacher, seeing calming as the key to knowing the true self, cultivating deep happiness and satisfaction in life. Suni brings a message of wellness and joy to corporations, schools, conferences and workshops.     “In our stressful world, many people are surviving rather than thriving. I teach simple practices to enable people to calm themselves, stay in the moment, find their clarity, creativity and wellness. Calming skills help you change how you respond to stress, improving your health and helping you find your smile.“',
      image: '/images/team18.webp'
    },
    {
      name: 'WARREN DESHIELDS      ',
      role: '',
      description: 'Chef D`s passion for feeding students and serving the community where he grew up has led him to the position of Food Service Director and an award-winning high school track & field coach. Chef D`s twenty plus years in school food service has afforded him the opportunity to serve on local, regional and national boards that sponsor food safety, food systems, and professional development. Warren is also a Reiss Motivation profile Master and certified life coach.      ',
      image: '/images/team19.webp'
    }

  ];



  return (
    <div>
      <section className='coach-sec mb-10'>
        <Container>
          <div className='inr-coaches p-10 rounded-xl'>
            <div className='coaches-content text-center mb-12'>
              <Heading level='1' fontsize='text-4xl mb-6'>MEET OUR COACHES</Heading>
              <Paragraph>
                We've tapped into some of the finest instructors this industry has to offer to offer your team a variety of courses.
                <br />See below to get to know more about the coaches you will see featured in FIG K12.
              </Paragraph>
            </div>
            <div className='coaches-videos mt-6 mb-6 text-center'>
              <div className='video-coch-nut'>
                <iframe data-ux="Embed" allowfullscreen="" type="text/html" frameborder="0"
                  src="//player.vimeo.com/video/496033762?autoplay=0&amp;title=0&amp; portrait=0&amp; byline=0&amp;badge=0"
                  data-aid="VIDEO_IFRAME_RENDERED" class=""></iframe>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className={teammates}>
        <Container>
          <div className={inrteammates}>
            <div className='frst'>
              <div className='team-main-heading'>
                <Heading fontsize='text-3xl text-center' level='2'>
                  PROFESSIONAL DEVELOPMENT COACHES
                </Heading>
              </div>
              <div className='pdc-slides'>
                <TeamSlider slides={slides} />
              </div>
            </div>
            <div className='fig-direct'>
              <div className='dir-deta'>
                <Heading level='3'>KELLY SANDERS</Heading>
                <Paragraph>
                  Kelley Sanders is the Victim Services Program Director for the Santa Rosa Kids' House, a Child Advocacy Center. She has served at Santa Rosa Kids' House in many capacities since 2012. She has a
                  background in Child Protective Investigations and Crisis Intervention. She has worked in Child Welfare for almost 20 years. Kelley is the Children's Point Person for the Santa Rosa Baptist Association. She is a graduate of the University of Arkansas with degrees 
                  in Psychology and Criminal Justice and has been a resident of Florida for the last 19 years. She is a wife and a busy mother of four girls.
                </Paragraph>
              </div>
              <div className='dir-avtar'>
                <CustomImage src='/images/director.webp'/>
              </div>
            </div>
            <div className='scnd'>
              <div className='team-main-heading'>
                <Heading fontsize='text-3xl text-center' level='2'>
                  FIG LIFESTYLE COACHES
                </Heading>
              </div>
              <div className='pdc-slides'>
                <TeamSlider slides={teamslides} />
              </div>
            </div>
          </div>

        </Container>
      </section>
    </div>
  )
}

export default figcoaches
