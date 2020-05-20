import * as shortid from 'shortid'
import {Workspace as IWorkspace} from '../swagger/models'

export class Workspace implements IWorkspace {
    id: string = shortid.generate()
    
    name : string = "New Workspace"
    image : string = "/assets/images/vscode_lg.png"
    description: string = ""
    type: "Code Server"
    sharing: boolean = false
    bundles: []
    dockerImage = "codercom/code-server:latest"
    workspaceLocation = "/home/john/projects/test-app"
    activityLog = []
    timeout = 30
}