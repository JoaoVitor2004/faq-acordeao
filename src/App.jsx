import { Wrapper } from './components/Wrapper'
import { Container, Faqs, Question, Background } from './styles'
import './bootstrap.css'
import Star from './assets/images/icon-star.svg'
import Minus from './assets/images/icon-minus.svg'
import Plus from './assets/images/icon-plus.svg'
import BackgroundDesktop from './assets/images/background-pattern-desktop.svg'
import BackgroundMobile from './assets/images/background-pattern-mobile.svg'

function App() {
  return (
    <Wrapper>
      <picture>
        <source media="(max-width: 768px)" srcset={BackgroundMobile} />
        <Background src={BackgroundDesktop} alt='background pattern' />
      </picture>
      <Container>
        <Faqs>
          <img src={Star} alt="icon star" />
          <h1>FAQs</h1>
        </Faqs>
        <Question className='position-relative' data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapseExample" style={{ marginBottom: '15px' }}>
          <p>What is Frontend Mentor, and how will it help me?</p>
          <img src={Minus} alt="icon minus" />
          <div class="collapse position-absolute top" id="collapse1">
            <div class="card card-body">
              Frontend Mentor offers realistic coding challenges to help developers improve their
              frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
              all levels and ideal for portfolio building.
            </div>
          </div>
        </Question>
        <p style={{ marginBottom: '30px', lineHeight: '20px' }} color={({ theme }) => theme.colors.GrayishPurple}>Frontend Mentor offers realistic coding challenges to help developers improve their
          frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
          all levels and ideal for portfolio building.</p>
        <Question className='position-relative' data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapseExample">
          <p>WIs Frontend Mentor free?</p>
          <img src={Plus} alt="icon minus" />
          <div class="collapse position-absolute top" id="collapse2">
            <div class="card card-body">
              Yes, Frontend Mentor offers both free and premium coding challenges, with the free
              option providing access to a range of projects suitable for all skill levels.
            </div>
          </div>
        </Question>
        <Question className='position-relative' data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapseExample">
          <p>Can I use Frontend Mentor projects in my portfolio?</p>
          <img src={Plus} alt="icon minus" />
          <div class="collapse position-absolute top" id="collapse3">
            <div class="card card-body">
              Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
              way to showcase your skills to potential employers!
            </div>
          </div>
        </Question>
        <Question className='position-relative' data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapseExample">
          <p>How can I get help if I'm stuck on a Frontend Mentor challenge?</p>
          <img src={Plus} alt="icon minus" />
          <div class="collapse position-absolute top" id="collapse4">
            <div class="card card-body">
              The best place to get help is inside Frontend Mentor's Discord community. There's a help
              channel where you can ask questions and seek support from other community members.
            </div>
          </div>
        </Question>
      </Container>
    </Wrapper>
  )
}

export default App