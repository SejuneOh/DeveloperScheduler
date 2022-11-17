import { funcGetNotionData } from "./../API/notionAPI";
import { Request, Response } from "express";
// Goals
export const getGoalsDB = async (req: Request, res: Response) => {
  const notionRes = await funcGetNotionData();

  if (notionRes === null || notionRes === undefined) {
    res.status(202).json({ success: false });
    return;
  } else {
    res.status(200).json({
      success: true,
      result: notionRes,
      id: process.env.NOTION_GOALS_ID,
    });
  }
};

// Projects
export const getProjectsDB = async (req: Request, res: Response) => {
  const notionRes = await funcGetNotionData("Projects");

  if (notionRes === null || notionRes === undefined) {
    res.status(202).json({ success: false });
    return;
  } else {
    res.status(200).json({
      success: true,
      result: notionRes,
      id: process.env.NOTION_PROJECTS_ID,
    });
  }
};

// Actions
export const getActionsDB = async (req: Request, res: Response) => {
  const notionRes = await funcGetNotionData("Actions");

  if (notionRes === null || notionRes === undefined) {
    res.status(202).json({ success: false });
    return;
  } else {
    res.status(200).json({
      success: true,
      result: notionRes,
      id: process.env.NOTION_ACTIONS_ID,
    });
  }
};

export const getActionsCalendar = async (req: Request, res: Response) => {
  const notionRes = await funcGetNotionData("ActionsCalendar");

  if (notionRes === null || notionRes === undefined) {
    res.status(202).json({ success: false });
    return;
  } else {
    res.status(200).json({ success: true, result: notionRes });
  }
};
