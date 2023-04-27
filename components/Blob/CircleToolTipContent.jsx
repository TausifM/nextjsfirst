import Image from "next/image"

const CircleToolTipContent = () => {
  return (
    <div className="circletooltip-container">
    <div className="cicletooltip">
      <div className="big-circle">
        <div className="icon-block">
          <Image src="https://ucarecdn.com/614bf107-8b04-45d2-9be6-1123d09b72ba/webdevicon.png" alt="web design icon" width="50" height="50" />
        </div>
        <div className="icon-block">
          <Image src="https://ucarecdn.com/ffcb2c5d-1bfb-4a28-b52d-94ad412b1ced/gamedesignicon.png" alt="game design icon" width="50" height="50"/>
        </div>
        <div className="icon-block">
          <Image src="https://ucarecdn.com/37f45061-b881-47a3-985a-ebc6e6a8e81b/gamedevicon.png" alt="game dev icon" width="50" height="50" />
        </div>
        <div className="icon-block">
          <Image src="https://ucarecdn.com/9a14f2fc-d7e7-46bf-aa1a-ee2e2210d425/uiuxicon.png" alt="ui-ux icon" width="50" height="50"/>
        </div>
      </div>
      <div className="circle">
        <div className="icon-block">
          <Image src="https://ucarecdn.com/ae76ecf5-1d3f-4edc-884c-dc2984976a7e/appicon.png" alt="app icon" width="50" height="50"/>
        </div>
        <div className="icon-block">
          <Image src="https://ucarecdn.com/2323ebfc-5b14-47ae-959a-191e82d0103a/blockchainicon.png" alt="blockchain icon" width="50" height="50"/>
        </div>
        <div className="icon-block">
          <Image src="https://ucarecdn.com/5e4802ac-8684-41f3-8657-1e0834d07abe/arvricon.png" alt="ar-vr icon" width="50" height="50"/>
        </div>
        <div className="icon-block">
          <Image src="https://ucarecdn.com/61a82adc-7eef-4e50-a7d5-8e11ef76ff31/artificialintelligenceicon.png" alt="artificial intelligence icon" width="50" height="50"/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CircleToolTipContent