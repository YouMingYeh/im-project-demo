import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container prose mx-0" >
      <h1>上田鋁業風光 AI 窗生產規劃專案雲端資訊系統</h1>
      <h2>簡介</h2>
      <p>「上田鋁業」是一間鋁門窗製造公司，有別於傳統的鋁門窗製造商，上田鋁業不僅研發能因應台灣氣候的科技產品「風光 Ai 窗」，也積極追求在原物料採購、生產規劃方面的智慧營運。我們這次專案，即以節省排程運算時間及最大化生產效率為目標，協助上田鋁業規劃鋁門窗製造的最佳排程。</p>
      <Image src="/logo.png" alt="logo" width={256} height={256} className="my-6" />



      <p>從收到訂單開始，業者會根據部門與截止日期將訂單分為多個製造需求單（簡稱為製造單），接著會進入生產線中的五個主要工作站，最後於交貨日期前提供完成品。業者目前面臨難以合理估算交貨時間的困難，且生產規劃總會消耗的大量人力時間成本。</p>

      <p>我們透過設計演算法和建立最佳化模型完成製造排程。最佳化模型是使用作業研究中的混合整數規劃對公司的生產規劃問題做精準計算；不過最佳化模型在資料量龐大時會難以在合理時間內求得最佳解，因此我們設計與實作了兩種能快速求得近似最佳解的啟發式演算法——「依序交期排程法」以及「逆推排程法」。我們的資訊系統已經部署於 Google Cloud Platform 和公司的環境中，可以即時讀取新上傳的製造單並且完成規劃。</p>


      <p>本專案的系統相較於以往的人工規劃，能提供更高效的鋁門窗生產規劃。同時，啟發式演算法也能在提供近似解的同時，顯著節省運算時間。未來我們期望此系統可以進一步應用於公司更多領域的系統規劃，推動更高層次的數位化轉型，提升整體利潤，並持續推動產業向永續發展方向邁進。</p>
      <div className="flex gap-2 w-full overflow-auto">
        <Image src="/factory/factory1.png" alt={"factory1"} width={256} height={256} className="my-6" />
        <Image src="/factory/factory2.png" alt={"factory2"} width={256} height={256} className="my-6" />
        <Image src="/factory/factory3.png" alt={"factory3"} width={256} height={256} className="my-6" />
        <Image src="/factory/factory4.jpg" alt={"factory4"} width={256} height={256} className="my-6" />
        <Image src="/factory/factory5.png" alt={"factory5"} width={256} height={256} className="my-6" />
      </div>
      <Button variant="expandIcon" Icon={ArrowRightIcon} iconPlacement="right" className="">
        <Link href={"/dashboard/data/order"} className="text-primary-foreground">
          開始
        </Link>
      </Button>
      <Separator className="my-8" />
      <h2>生產規劃相關重要資訊</h2>
      <p>本節介紹上田鋁業生產規劃的重要資訊，包含製造需求單、前置作業、廠內作業與交貨。</p>
      <h3>製造需求單</h3>
      <p>我們會將客戶訂單整理成製造需求單，內容會包含交貨時段、產品、是否分批。我們將分批次的製造需求單視為不同製造需求單以方便計算。此外，我們還需考慮兩種製造需求單類型：分別是經銷案與建設案。經銷案較不需要考慮提早交貨的成本，僅需考慮延期成本；但建設案必須滿足精準的交貨時段，必須同時考量提早與延期的成本。</p>
      <h3>前置作業</h3>
      <p>前置作業包含不由上田鋁業公司的工廠處理的步驟，包含跟原料供應商訂購原料，以及委託合作廠商進行原料表面處理。更精確地說，共分成三個步驟，抽料、表面處理、訂購玻璃：


      </p>
      <ul>
        <li>抽料：即備毛料，每次抽料時間並不相同，會根據當下情況有不同的天數，但前置時間是固定的。
        </li>
        <li>表面處理：我們需要考慮表面處理時間，通常處理時間約為兩個禮拜；另外標準的顏色也會有排定固定的處理日，特殊色則要另外安排。
        </li>
        <li>訂購玻璃：這個步驟通常不會超過一天，抽料與表面處理是主要瓶頸。</li>
      </ul>
      <h3>廠內作業</h3>
      <p>在廠內作業中，公司共有五個專門的工作站，分別負責裁切、沖孔、裝配、組立和包裝。其中裁切及沖孔這兩個工作站因科技限制，會分別拆分成兩個子工作站。在我們的模型設計中，經過適當的資料預處理後，便可以將各子工作站視為串連且獨立的工作站。</p>
      <p>每個工作站的產能是根據它在單位時間內能處理的產能來衡量的，例如沖孔工作站的產能是指它能進行多少次沖孔、裝配工作站能進行幾次裝配。值得注意的是，不同部件會有不同的所需產能，也就是說，一個窗戶將會有各種部件，每個部件都將估計其工作量，加總後得到其在每個工作站所需的產能用以輸入模型，最後利用模型得到確切的規劃。</p>
      <p>此外，我們也考慮了產品從一階段轉移到下一階段的轉換率，來將良率、產品損耗、產品組裝等問題納入考量。</p>
      <p>由於切換模具也會佔據一部份的工作站整備時間，因此若每天工作站的產能為固定的量值，則模具切換所需要的整備時間也應該被視為產能耗損。</p>
      <h3>交貨</h3>
      <p>產品在工作站生產以及組裝完成後，便可以準備交貨。若與客戶的交貨時段還未到，產品會先放置於倉庫中，不過由於倉庫的大小有限制，所以也需要追蹤剩餘的庫存；且誠如前文所說，庫存存放的成本也會因經銷案與建設案而有所不同。</p>
      <Link href="https://2024-ntuim-project.github.io/docs">
        了解更多
      </Link>

    </div>
  );
}
