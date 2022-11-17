import { Client } from "@notionhq/client";

export const funcGetNotionData = async (DBName: string = "") => {
  const notion = new Client({ auth: process.env.NOTION_KEY });
  let DBID: string = "";

  switch (DBName) {
    case "Projects": {
      DBID = process.env.NOTION_PROJECTS_ID as string;
      break;
    }
    case "Actions": {
      DBID = process.env.NOTION_ACTIONS_ID as string;
      break;
    }
    case "ActionsCalendar": {
      DBID = process.env.NOTION_ACTIONS_CALENDAR_ID as string;
      break;
    }
    default: {
      DBID = process.env.NOTION_GOALS_ID as string;
      break;
    }
  }

  const res = await notion.databases.query({ database_id: DBID });
  return res.results;
};
