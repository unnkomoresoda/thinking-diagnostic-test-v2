import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Brain, Layers, Zap, Shuffle } from "lucide-react";

interface DimensionModalProps {
  isOpen: boolean;
  onClose: () => void;
  dimension: "baseType" | "layer" | "power" | "shift" | null;
}

const dimensionDetails = {
  baseType: {
    title: "Base Type - 認知機能の優先順位",
    icon: <Brain className="w-6 h-6" />,
    color: "text-chart-1",
    bg: "bg-chart-1/10",
    whyMeasure: "なぜ測定するのか？",
    whyContent: "MBTIの16タイプは、人間の基本的な認知パターンを示しています。あなたがどのように情報を受け取り、判断を下すかという「デフォルト設定」を理解することで、自分の思考の癖や強み、弱みが明確になります。",
    practical: "実用的な意義",
    practicalContent: "チームビルディング、キャリア選択、人間関係の構築、意思決定プロセスの改善など、あらゆる場面で自分と他者の認知パターンの違いを理解することは、コミュニケーション効率と成果を大きく向上させます。",
    examples: "例：",
    examplesContent: "ENTPは新しいアイデアを次々と生み出す傾向があり、ISTJは着実に計画を実行する傾向があります。この違いを理解することで、チーム内での役割分担が明確になります。",
  },
  layer: {
    title: "Cognitive Layer - 思考の解像度と時間軸",
    icon: <Layers className="w-6 h-6" />,
    color: "text-chart-2",
    bg: "bg-chart-2/10",
    whyMeasure: "なぜ測定するのか？",
    whyContent: "同じBase Typeでも、思考の焦点距離は大きく異なります。目の前のタスクに集中する人、パターンを分析する人、戦略を立てる人、システム全体を見る人、歴史的トレンドを読む人。この5段階のレイヤーを測定することで、あなたが得意とする思考の深さが明確になります。",
    practical: "実用的な意義",
    practicalContent: "プロジェクトの段階に応じて必要なレイヤーが異なります。初期段階ではL1（実行）が必要ですが、長期戦略ではL4（システム）が重要です。自分のレイヤーを知ることで、どの段階で活躍できるか、どのレイヤーの人と協働すべきかが見えてきます。",
    examples: "例：",
    examplesContent: "L2（分析）の人は問題の根本原因を見つけるのが得意ですが、L1（実行）の人は素早く行動に移すのが得意です。両者が協力することで、分析と実行のバランスが取れた成果が生まれます。",
  },
  power: {
    title: "Processing Power - 論理的整合性の検知精度",
    icon: <Zap className="w-6 h-6" />,
    color: "text-chart-3",
    bg: "bg-chart-3/10",
    whyMeasure: "なぜ測定するのか？",
    whyContent: "同じ情報を与えられても、人によって論理的矛盾を見つける能力は異なります。論理トラップ（一見正しく見えるが、実は矛盾している命題）を用いて、あなたの思考エンジンの「演算精度」を測定します。これは、詐欺や誤情報に騙されにくさ、複雑な問題の本質を見抜く能力を示します。",
    practical: "実用的な意義",
    practicalContent: "高いProcessing Powerを持つ人は、複雑な交渉、データ分析、リスク評価などで活躍します。一方、低い人は、信頼できる情報源に頼り、チェック体制を整えることで、ミスを減らせます。自分の精度を知ることで、適切なサポート体制を構築できます。",
    examples: "例：",
    examplesContent: "「全ての鳥は飛べる。ペンギンは鳥である。したがってペンギンは飛べる。」という命題の矛盾を素早く見つけられるかどうかが、Processing Powerの高さを示します。",
  },
  shift: {
    title: "Dynamic Shift - レイヤー間の移動能力",
    icon: <Shuffle className="w-6 h-6" />,
    color: "text-chart-5",
    bg: "bg-chart-5/10",
    whyMeasure: "なぜ測定するのか？",
    whyContent: "状況が変わるたびに、必要な思考レイヤーは変わります。火災対応ではL1（実行）が必須ですが、その後の改善策を考えるにはL3（戦略）が必要です。異なるレイヤーに素早く切り替えられる柔軟性が、複雑な状況での成功を決めます。",
    practical: "実用的な意義",
    practicalContent: "高いDynamic Shiftを持つ人は、危機管理、変化への対応、複数プロジェクトの同時進行などで活躍します。この能力は、リーダーシップ、起業家精神、イノベーションの源となります。自分のシフト能力を知ることで、どのような環境で最も力を発揮できるかが明確になります。",
    examples: "例：",
    examplesContent: "朝は顧客対応（L1）、昼は市場分析（L2）、午後は戦略会議（L3）という1日の中で、異なるレイヤーに素早く切り替えられる人は、Dynamic Shiftが高いと言えます。",
  },
};

export function DimensionModal({ isOpen, onClose, dimension }: DimensionModalProps) {
  if (!dimension) return null;

  const details = dimensionDetails[dimension];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-2 rounded-lg ${details.bg} ${details.color}`}>
              {details.icon}
            </div>
            <DialogTitle className="text-xl">{details.title}</DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Why Measure */}
          <div>
            <h3 className="font-semibold text-base mb-2">{details.whyMeasure}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {details.whyContent}
            </p>
          </div>

          {/* Practical Significance */}
          <div>
            <h3 className="font-semibold text-base mb-2">{details.practical}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {details.practicalContent}
            </p>
          </div>

          {/* Examples */}
          <div>
            <h3 className="font-semibold text-base mb-2">{details.examples}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {details.examplesContent}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
