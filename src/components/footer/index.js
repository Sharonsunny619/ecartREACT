import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="appFooter">
      <Typography.Link href="https://www.wonder.legal/us/modele/privacy-policy-for-website-or-mobile-app?gclid=EAIaIQobChMIxeCD_q-2_gIVLJNmAh3TrQPlEAAYAiAAEgKuE_D_BwE" target={"_blank"}>
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="https://ecartapi.com/terms-and-conditions" target={"_blank"}>
        Terms & Conditions
      </Typography.Link>
      <Typography.Link href="https://ekartpet.com/pages/refund-policy" target={"_blank"}>
        Return Policy
      </Typography.Link>
      <Typography.Link href="PH:+9234567810" target={"_blank"}>
        +9234567810
      </Typography.Link>
    </div>
  );
}
export default AppFooter;
