import Image from "next/image"
import Link from "next/link"

const CircleToolTipContent = ({activeCircle}) => {
  return (
    <div className="circletooltip-container" style={{display: activeCircle ? 'flex' : 'none'}}>
    <div className="cicletooltip">
      <div className="big-circle wrapper">
        <div className="icon-block icon facebook">
        <div className="tooltip">Get More Customers</div>
        <Link href="/get-more-customers" className="p-0 m-0">
          <Image src="https://ucarecdn.com/614bf107-8b04-45d2-9be6-1123d09b72ba/webdevicon.png" alt="web design icon" width="50" height="50" />
        </Link>
        </div>
        <div className="icon-block icon twitter">
        <div className="tooltip">Construction Builders</div>
        <Link href="/construction-builders" className="p-0 m-0">
          <Image src="https://ucarecdn.com/ffcb2c5d-1bfb-4a28-b52d-94ad412b1ced/gamedesignicon.png" alt="game design icon" width="50" height="50"/>
          </Link>
        </div>
        <div className="icon-block icon instagram">
        <div className="tooltip">Health Care</div>
        <Link href="/health-care" className="p-0 m-0">
          <Image src="https://ucarecdn.com/37f45061-b881-47a3-985a-ebc6e6a8e81b/gamedevicon.png" alt="game dev icon" width="50" height="50" />
          </Link>
        </div>
        <div className="icon-block icon facebook">
        <div className="tooltip">Law Firm</div>
        <Link href="/law-firm" className="p-0 m-0">
          <Image src="https://ucarecdn.com/9a14f2fc-d7e7-46bf-aa1a-ee2e2210d425/uiuxicon.png" alt="ui-ux icon" width="50" height="50"/>
          </Link>
        </div>
      </div>
      <div className="circle wrapper">
        <div className="icon-block icon twitter">
        <div className="tooltip">Get More Customers</div>
        <Link href="/get-more-customers" className="p-0 m-0">
          <Image src="https://ucarecdn.com/ae76ecf5-1d3f-4edc-884c-dc2984976a7e/appicon.png" alt="app icon" width="50" height="50"/>
          </Link>
        </div>
        <div className="icon-block icon twitter">
        <div className="tooltip">Get More Customers</div>
        <Link href="/get-more-customers" className="p-0 m-0">
          <Image src="https://ucarecdn.com/2323ebfc-5b14-47ae-959a-191e82d0103a/blockchainicon.png" alt="blockchain icon" width="50" height="50"/>
          </Link>
        </div>
        <div className="icon-block icon twitter">
        <div className="tooltip">Get More Customers</div>
        <Link href="/get-more-customers" className="p-0 m-0">
          <Image src="https://ucarecdn.com/5e4802ac-8684-41f3-8657-1e0834d07abe/arvricon.png" alt="ar-vr icon" width="50" height="50"/>
          </Link>
        </div>
        <div className="icon-block icon twitter">
        <div className="tooltip">Get More Customers</div>
        <Link href="/get-more-customers" className="p-0 m-0">
          <Image src="https://ucarecdn.com/61a82adc-7eef-4e50-a7d5-8e11ef76ff31/artificialintelligenceicon.png" alt="artificial intelligence icon" width="50" height="50"/>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CircleToolTipContent