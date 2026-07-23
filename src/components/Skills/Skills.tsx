import { useTranslation } from "react-i18next";
import { LuSparkles } from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";
import SkillItem from "../SkillItem/SkillItem";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="min-h-[921px] flex flex-col items-center gap-4 p-20 pb-0 text-center"
    >
      <h2 className="flex justify-center self-center gap-5 text-3xl font-bold">
        <LuSparkles className="text-4xl" />
        {t("skills.title")}
      </h2>

      <div className="flex w-full justify-evenly gap-20 p-20">
        <div className="flex max-w-[50%] flex-col items-center gap-10">
          <h2 className="flex items-center gap-4 text-center text-2xl font-semibold">
            <RiComputerLine className="text-3xl" />
            {t("skills.hardSkills")}
          </h2>

          <div className="flex flex-wrap justify-center gap-x-7 gap-y-12">
            <SkillItem
              title={t("skills.languages.title")}
              listItems={t("skills.languages.items", {
                returnObjects: true,
              }) as string[]}
            />

            <SkillItem
              title={t("skills.development.title")}
              listItems={t("skills.development.items", {
                returnObjects: true,
              }) as string[]}
            />

            <SkillItem
              title={t("skills.tools.title")}
              listItems={t("skills.tools.items", {
                returnObjects: true,
              }) as string[]}
            />

            <SkillItem
              title={t("skills.frameworks.title")}
              listItems={t("skills.frameworks.items", {
                returnObjects: true,
              }) as string[]}
            />

            <SkillItem
              title={t("skills.performance.title")}
              listItems={t("skills.performance.items", {
                returnObjects: true,
              }) as string[]}
            />
          </div>
        </div>

        <div className="flex max-w-[50%] flex-col items-center gap-10 text-lg">
          <h2 className="flex items-center gap-4 text-center text-2xl font-semibold">
            <FaHandsHelping className="text-3xl" />
            {t("skills.softSkills")}
          </h2>

          <SkillItem
            title={t("skills.soft.title")}
            listItems={t("skills.soft.items", {
              returnObjects: true,
            }) as string[]}
          />
        </div>
      </div>
    </section>
  );
}