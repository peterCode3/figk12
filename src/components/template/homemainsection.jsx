import React from 'react'
import Heading from '../atoms/Heading/Heading'
import Container from '../atoms/Container/container'
import CustomImage from '../atoms/CustomImage/CustomImage'
import '../../app/globals.css';
import useHomemainsection from "@/assets/js/scroll";
import Paragraph from '../atoms/Paragraph/Paragraph';
import Button from '../atoms/Button/Button';
import FontAwesomeIcon from '../atoms/FontAwesomeIcon/FontAwesomeIcon';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';




function homemainsection() {
    useHomemainsection();
    const flexcss = 'flex justify-between items-center';

    const textwhite = 'text-white';


    return (
        <>
            <div className="button-btm-top">
                <Button type="button" btnclass="slides-btn btm-to-top">
                    <FontAwesomeIcon icons={faAngleUp} size="lg" color="red" className="fa-solid fa-angle-up" />
                </Button>
                <Button type="button" btnclass="slides-btn top-to-btm">
                    <FontAwesomeIcon icons={faAngleDown} size="lg" color="red" className="fa-solid fa-angle-up" />
                </Button>
            </div>
            <div className='main-sct'>
                <Container>
                    <div className='innr-fig'>
                        <div className={`page active ${flexcss} ${textwhite}`}>
                            <div className='fig-icons fig-col w-1/4'>
                                <Heading fontsize='text-7xl' level='1'>
                                    K12 SCHOOL NUTRITION
                                </Heading>
                                <CustomImage src='/images/kerfin7_nea_2734.png' />
                            </div>
                            <div className='fig-col-img w-1/4'>
                                <CustomImage src='images/1stman.png' alt='K12' />
                            </div>
                            <div className='figdot fig-col2 w-1/4'>
                                <Heading fontsize='text-6xl' level='2'>
                                    Future Inspire Grow
                                </Heading>
                                <CustomImage src='/images/tree-sign.png' />
                            </div>
                        </div>
                        <div className={`fig-ptr page ${flexcss} ${textwhite}`}>
                            <div className='fig-col w-1/4'>
                                <Heading fontsize='text-2xl' level='5'>
                                    <span>FIG</span> FIG is your one stop shop for all things Professional Development and Employee Wellness
                                    for your school nutrition department. Connect with your team and encourage success in
                                    meaningful ways relevant to them.
                                </Heading>
                            </div>
                            <div className='fig-col-img w-1/2'>
                                <CustomImage src='images/man-with-laptop-bg.png' alt='K12' />
                            </div>
                            <div className='fig-col2 w-1/5 fig-portfolio'>
                                <div className='figimage'>
                                    <CustomImage src='/images/portfolio3.png' />
                                </div>
                                <div className='figimage'>
                                    <CustomImage src='/images/portfolio1.png' />
                                </div>
                                <div className='figimage'>
                                    <CustomImage src='/images/portfolio2.png' />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='second-section'>
                <Container>
                    <div className='innr-fig'>
                        <div className={`page ${flexcss} ${textwhite}`}>
                            <div className='fig-col w-1/2'>
                                <Heading fontsize='text-3xl' level='3'>
                                    FUTURE.INSPIRE.GROW
                                </Heading>
                                <Paragraph>
                                    There is so much more to growing your team than just checking a box on an Administrative Review. We help you
                                    create an environment that encourages looking to the FUTURE,
                                    INSPIRING change and GROWING professionally, personally, mentally and physically.
                                </Paragraph>
                                <Heading fontsize='text-3xl' level='3'>
                                    EARN CEU CREDITS
                                </Heading>
                                <Paragraph>
                                    All of our professional development courses are designed with your team's busy schedule
                                    in mind. We have broken down each lesson within a course to 15-20 minute videos,
                                    allowing members to watch when they can and pick up where they left off. Once
                                    all lessons are completed a CEU certificate is awarded for each course and
                                    recorded for your review.
                                </Paragraph>
                            </div>
                            <div className='dres-img fig-col-img w-1/2'>
                                <CustomImage src='images/3rdsectionhero.png' alt='K12' />
                            </div>
                        </div>
                        <div className={`page ${flexcss} ${textwhite}`}>
                            <div className='fig-col w-1/2'>
                                <Heading fontsize='text-3xl' level='3'>
                                    TRACK PROGRESS
                                </Heading>
                                <Paragraph>
                                    FIG makes tracking progress your team is making towards meeting their USDA required professional
                                    development as easy as 1,2,3! Automatically keep up with all credits earned within FIG. Easily
                                    add credits earned from outside sources such as conferences, in service meetings and manager's
                                    meetings. Export detailed and summary reports as needed.
                                </Paragraph>
                                <Heading fontsize='text-3xl' level='3'>
                                    FIG COMMUNITY
                                </Heading>
                                <Paragraph>
                                    FIG offers the school nutrition industry's first and only dedicated social media network.
                                    Grow your network by connecting with school nutrition professionals across the nation.
                                    Post, like, comment and share about what is going on in your program with others who
                                    understand exactly what you are going through. Highlight your team successes with
                                    pictures and videos. Inspire your team to mold the future of school nutrition in
                                    a platform that feels familiar to them.
                                </Paragraph>
                            </div>
                            <div className='dres-img fig-col-img w-1/2'>
                                <CustomImage src='images/3rdsectionhero.png' alt='K12' />
                            </div>
                        </div>
                        <div className={`page ${flexcss} ${textwhite}`}>
                            <div className='fig-col w-1/2'>
                                <Heading fontsize='text-3xl' level='3'>
                                    TEAM COMMUNICATION
                                </Heading>
                                <Paragraph>
                                    Stop chasing down emails. Use your team's Private Discussion Group for organized
                                    communication that will also show on your team members' News Feed. Send group
                                    messages with push notifications in the FIG app. Connect with all generations
                                    with communication methods they prefer!
                                </Paragraph>
                                <Heading fontsize='text-3xl' level='3'>
                                    INVOLVE YOUR STAKEHOLDERS
                                </Heading>
                                <Paragraph>
                                    Highlight the amazing food you are serving in your district by submitting your very
                                    own recipes to be featured on FIG. Recipe links are open for the public to view
                                    without a membership and scalable so parents can easily duplicate meals that
                                    your students love at home!
                                </Paragraph>
                            </div>
                            <div className='dres-img fig-col-img w-1/2'>
                                <CustomImage src='images/3rdsectionhero.png' alt='K12' />
                            </div>
                        </div>
                        <div className={`page ${flexcss} ${textwhite}`}>
                            <div className='fig-col w-1/2'>
                                <Heading fontsize='text-3xl' level='3'>
                                    FIG LIFESTYLE
                                </Heading>
                                <Paragraph>
                                    Professional Standards are not the only thing that creates a well rounded team member. It
                                    is important to offer you team opportunities to grow on a personal level as well. That
                                    is why we created FIG Lifestyle. You can provide your team with short 3-8 minute
                                    video lessons on several topics. From Mindfulness and Meditation practices to
                                    Yoga, Dancing and even a complete 6 week Body Weight Exercise course and
                                    everything in between. FIG Lifestyle has something for everyone. Create
                                    and track Wellness Goals and cheer your teammates on as they set and
                                    conquer goals like the rock stars they are!
                                </Paragraph>
                            </div>
                            <div className='dres-img fig-col-img w-1/2'>
                                <CustomImage src='images/3rdsectionhero.png' alt='K12' />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
           
        </>
    )
}

export default homemainsection
