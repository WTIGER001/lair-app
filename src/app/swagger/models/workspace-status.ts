/* tslint:disable */

/**
 * Workspace Status
 */
export interface WorkspaceStatus {

  /**
   * Workspace ID / session id
   */
  id?: string;

  /**
   * Amount of CPU being requested to run this algorithm
   */
  status?: 'none' | 'scheduling' | 'starting' | 'running' | 'stopping';

  /**
   * URL to the running instance
   */
  url?: string;
}
