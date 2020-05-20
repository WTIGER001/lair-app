/* tslint:disable */

/**
 * Workspace
 */
export interface Workspace {

  /**
   * Amount of CPU being requested to run this algorithm
   */
  cpus?: number;

  /**
   * Workspace ID
   */
  description?: string;

  /**
   * Full docker image name. Including the repo
   */
  dockerImage?: string;

  /**
   * Workspace ID
   */
  id?: string;

  /**
   * Image of the workspace
   */
  image?: string;

  /**
   * Amount of Memory in MBs being requested
   */
  memory?: number;

  /**
   * Workspace ID
   */
  name?: string;

  /**
   * If the workpsace is shared for others to clone
   */
  shared?: boolean;

  /**
   * Timeout, in minutes, that a workspace will be kept active, default 30 min
   */
  timeout?: number;

  /**
   * Location of the workspace volume
   */
  workpsaceLocation?: string;
}
