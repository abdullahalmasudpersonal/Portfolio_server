import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProjectsServices } from "./projects.services";

/* eslint-disable @typescript-eslint/no-explicit-any */
const getAllProjects = catchAsync(async (req, res) => {
  try {
    const result = await ProjectsServices.getAllProjects();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Products retrived successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      error: err,
    });
  }
});

const getSingleProject = catchAsync(async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ProjectsServices.getSingleProjectIntoDB(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Get single project successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      error: err,
    });
  }
});

const createProject = catchAsync(async (req, res) => {
  try {
    const result = await ProjectsServices.createProjectInotDB(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Create project successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      error: err,
    });
  }
});

export const ProjectsControllers = {
  getAllProjects,
  getSingleProject,
  createProject,
};
