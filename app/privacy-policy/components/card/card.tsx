const PrivacyPolicyCard = ({ title, description }: { title: string; description: string }) => (
  <>
    <h3 className="font-bold mt-9 mb-6 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">
      {title}
    </h3>
    <p className="text-xs xl:text-sm 2xl:text-base">{description}</p>
  </>
);

export default PrivacyPolicyCard;
