/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Workspace } from '../models/workspace';
import { WorkspaceStatus } from '../models/workspace-status';
@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly getWorkspacesPath = '/workspaces';
  static readonly getWorkspaceByIdPath = '/workspaces/{id}';
  static readonly putWorkpaceByIdPath = '/workspaces/{id}';
  static readonly postWorkpaceByIdPath = '/workspaces/{id}';
  static readonly deleteWorkpaceByIdPath = '/workspaces/{id}';
  static readonly launchWorkpaceByIdPath = '/workspaces/{id}/launch';
  static readonly getWorkpaceLaunchStatusPath = '/workspaces/{id}/launch';
  static readonly cancelLaunchPath = '/workspaces/{id}/launch';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns a list workspaces for the calling user.
   *
   * The users name is expected to be in a JWT.
   * @return OK
   */
  getWorkspacesResponse(): __Observable<__StrictHttpResponse<Array<Workspace>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/workspaces`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Workspace>>;
      })
    );
  }
  /**
   * Returns a list workspaces for the calling user.
   *
   * The users name is expected to be in a JWT.
   * @return OK
   */
  getWorkspaces(): __Observable<Array<Workspace>> {
    return this.getWorkspacesResponse().pipe(
      __map(_r => _r.body as Array<Workspace>)
    );
  }

  /**
   * Returns a workspace
   * @param id undefined
   * @return OK
   */
  getWorkspaceByIdResponse(id: string): __Observable<__StrictHttpResponse<Workspace>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/workspaces/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Workspace>;
      })
    );
  }
  /**
   * Returns a workspace
   * @param id undefined
   * @return OK
   */
  getWorkspaceById(id: string): __Observable<Workspace> {
    return this.getWorkspaceByIdResponse(id).pipe(
      __map(_r => _r.body as Workspace)
    );
  }

  /**
   * Updates a workspace
   * @param params The `ApiService.PutWorkpaceByIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `workspace`: Workspace to save
   *
   * @return OK
   */
  putWorkpaceByIdResponse(params: ApiService.PutWorkpaceByIdParams): __Observable<__StrictHttpResponse<Workspace>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.workspace;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/workspaces/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Workspace>;
      })
    );
  }
  /**
   * Updates a workspace
   * @param params The `ApiService.PutWorkpaceByIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `workspace`: Workspace to save
   *
   * @return OK
   */
  putWorkpaceById(params: ApiService.PutWorkpaceByIdParams): __Observable<Workspace> {
    return this.putWorkpaceByIdResponse(params).pipe(
      __map(_r => _r.body as Workspace)
    );
  }

  /**
   * Updates a workspace
   * @param params The `ApiService.PostWorkpaceByIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `workspace`: Workspace to save
   *
   * @return OK
   */
  postWorkpaceByIdResponse(params: ApiService.PostWorkpaceByIdParams): __Observable<__StrictHttpResponse<Workspace>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.workspace;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/workspaces/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Workspace>;
      })
    );
  }
  /**
   * Updates a workspace
   * @param params The `ApiService.PostWorkpaceByIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `workspace`: Workspace to save
   *
   * @return OK
   */
  postWorkpaceById(params: ApiService.PostWorkpaceByIdParams): __Observable<Workspace> {
    return this.postWorkpaceByIdResponse(params).pipe(
      __map(_r => _r.body as Workspace)
    );
  }

  /**
   * Deletes a workspace
   * @param id undefined
   */
  deleteWorkpaceByIdResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/workspaces/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Deletes a workspace
   * @param id undefined
   */
  deleteWorkpaceById(id: string): __Observable<null> {
    return this.deleteWorkpaceByIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Requests a workspace to be launched
   * @param id undefined
   * @return OK
   */
  launchWorkpaceByIdResponse(id: string): __Observable<__StrictHttpResponse<WorkspaceStatus>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/workspaces/${encodeURIComponent(id)}/launch`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<WorkspaceStatus>;
      })
    );
  }
  /**
   * Requests a workspace to be launched
   * @param id undefined
   * @return OK
   */
  launchWorkpaceById(id: string): __Observable<WorkspaceStatus> {
    return this.launchWorkpaceByIdResponse(id).pipe(
      __map(_r => _r.body as WorkspaceStatus)
    );
  }

  /**
   * Requests a workspace to be launched
   * @param id undefined
   * @return OK
   */
  getWorkpaceLaunchStatusResponse(id: string): __Observable<__StrictHttpResponse<WorkspaceStatus>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/workspaces/${encodeURIComponent(id)}/launch`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<WorkspaceStatus>;
      })
    );
  }
  /**
   * Requests a workspace to be launched
   * @param id undefined
   * @return OK
   */
  getWorkpaceLaunchStatus(id: string): __Observable<WorkspaceStatus> {
    return this.getWorkpaceLaunchStatusResponse(id).pipe(
      __map(_r => _r.body as WorkspaceStatus)
    );
  }

  /**
   * Stops a launched workspace
   * @param params The `ApiService.CancelLaunchParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `commitChanges`:
   *
   * @return OK
   */
  cancelLaunchResponse(params: ApiService.CancelLaunchParams): __Observable<__StrictHttpResponse<WorkspaceStatus>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.commitChanges != null) __params = __params.set('commitChanges', params.commitChanges.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/workspaces/${encodeURIComponent(params.id)}/launch`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<WorkspaceStatus>;
      })
    );
  }
  /**
   * Stops a launched workspace
   * @param params The `ApiService.CancelLaunchParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `commitChanges`:
   *
   * @return OK
   */
  cancelLaunch(params: ApiService.CancelLaunchParams): __Observable<WorkspaceStatus> {
    return this.cancelLaunchResponse(params).pipe(
      __map(_r => _r.body as WorkspaceStatus)
    );
  }
}

module ApiService {

  /**
   * Parameters for putWorkpaceById
   */
  export interface PutWorkpaceByIdParams {
    id: string;

    /**
     * Workspace to save
     */
    workspace?: Workspace;
  }

  /**
   * Parameters for postWorkpaceById
   */
  export interface PostWorkpaceByIdParams {
    id: string;

    /**
     * Workspace to save
     */
    workspace?: Workspace;
  }

  /**
   * Parameters for cancelLaunch
   */
  export interface CancelLaunchParams {
    id: string;
    commitChanges?: boolean;
  }
}

export { ApiService }
