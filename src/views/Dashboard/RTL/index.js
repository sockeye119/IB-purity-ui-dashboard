// Chakra imports
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React from "react";
import { rtlDashboardTableData, rtlTimelineData } from "variables/general";
import ActiveUsers from "../Dashboard/components/ActiveUsers";
import BuiltByDevelopers from "../Dashboard/components/BuiltByDevelopers";
import MiniStatistics from "../Dashboard/components/MiniStatistics";
import OrdersOverview from "../Dashboard/components/OrdersOverview";
import Projects from "../Dashboard/components/Projects";
import SalesOverview from "../Dashboard/components/SalesOverview";
import WorkWithTheRockets from "../Dashboard/components/WorkWithTheRockets";

export default function Dashboard() {
  // Chakra Color Mode

  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
        <MiniStatistics
          title={"総売上高"}
          amount={"$53,000"}
          percentage={55}
          icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"新規顧客"}
          amount={"2,300"}
          percentage={5}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"今日のユーザー"}
          amount={"+3,020"}
          percentage={-14}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"今日の利益"}
          amount={"$173,000"}
          percentage={8}
          icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>
      <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my="26px"
        gap="24px"
      >
        <BuiltByDevelopers
          title={"デベロッパーによる構築"}
          name={"Purity UIダッシュボード"}
          description={
            "カラー、カード、タイポグラフィーから複雑な要素まで、完全なドキュメンテーションが用意されています。"
          }
          image={
            <Image
              src={logoChakra}
              alt="chakra image"
              minWidth={{ md: "300px", lg: "auto" }}
            />
          }
        />
        <WorkWithTheRockets
          backgroundImage={peopleImage}
          title={"ロケットと一緒に働く"}
          description={
            "富の形成は、ポジティブな総収入のモダンな革命的なゲームです。すべては誰が最初にチャンスをつかむかについてです。"
          }
        />
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap="24px"
        mb={{ lg: "26px" }}
      >
        <ActiveUsers
          title={"アクティブユーザー"}
          percentage={23}
          chart={<BarChart />}
        />
        <SalesOverview
          title={"売上概要"}
          percentage={5}
          chart={<LineChart />}
        />
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        gap="24px"
      >
        <Projects
          title={"プロジェクト"}
          amount={30}
          captions={["Companies", "Members", "Budget", "Completion"]}
          data={rtlDashboardTableData}
        />
        <OrdersOverview
          title={"注文の概要"}
          amount={30}
          data={rtlTimelineData}
        />
      </Grid>
    </Flex>
  );
}
