import { Link } from 'react-router-dom'
import Image from '../assets/images/Group 6.png'

const About = () => {
  return (
    <div className='w-full py-[50px]' id="about-us">
      <div className='container mx-auto px-2 grid lg:grid-cols-2 gap-[100px]'>
        <div className='flex md:justify-center'>
          <div className='overflow-hidden lg:h-[639px] w-full max-w-[575px] rounded-[20px]'>
            <img src={Image} alt="image" className='w-full h-full object-cover' />
          </div>
        </div>
        <div className='lg:pt-[80px]'>
          <h2 className='text-text4 text-[40px] leading-[60px] font-semibold mb-6'>About Us</h2>
          <p className='text-lg leading-8 text-text8 mb-10'>Lipton is a proud national sponsor of America Heart Association's Life is Why program that inspires people to live healthier, longer lives. Lipton is working with the Association to help raise awareness on the impact of diet and lifestyle on heart health, including the benefits of drinking unsweetened brewed tea. <Link to="" className='text-text7'>Learn more about the sponsorship here...</Link></p>
          <span className='text-xs italic leading-[18px]'>*The American Heart Association's relationship is limited to Unsweetened Black Tea and Green Tea*</span>
        </div>
      </div>
    </div>
  )
}

export default About