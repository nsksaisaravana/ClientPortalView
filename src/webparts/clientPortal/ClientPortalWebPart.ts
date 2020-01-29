import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
// import {
//   BaseClientSideWebPart,
//   IPropertyPaneConfiguration,
//   PropertyPaneTextField
// } from '@microsoft/sp-webpart-base';
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IPropertyPaneConfiguration, PropertyPaneTextField } from "@microsoft/sp-property-pane";
import styles from './ClientPortalWebPart.module.scss';
import * as strings from 'ClientPortalWebPartStrings';
import ClientPortal from './components/ClientPortal/ClientPortal';
import { IClientPortalProps } from './components/ClientPortal/IClientPortalProps';
import { SPComponentLoader } from '@microsoft/sp-loader';
import * as jQuery from "jquery";
import { sp } from "@pnp/sp";
import { initializeIcons } from 'office-ui-fabric-react';
export interface IClientPortalWebPartProps {
  description: string;
}

export default class ClientPortalWebPart extends BaseClientSideWebPart<IClientPortalWebPartProps> {
  private _styles: any | undefined;

  public onInit(): Promise<void> {
    sp.setup({
      spfxContext: this.context
    });
    this._styles = styles;
    initializeIcons();
    return Promise.resolve();
  }

  public render(): void {
    SPComponentLoader.loadCss("https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.css");
    SPComponentLoader.loadCss("https://cdn.jsdelivr.net/npm/primereact@3.1.9/resources/primereact.min.css");
    SPComponentLoader.loadCss("https://cdn.jsdelivr.net/npm/primereact@3.1.9/resources/themes/nova-light/theme.css");
    SPComponentLoader.loadCss("https://unpkg.com/primeicons/primeicons.css");
    //SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css");
    SPComponentLoader.loadCss("https://use.fontawesome.com/releases/v5.8.2/css/all.css");
    SPComponentLoader.loadCss("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css");
    // SPComponentLoader.loadCss("https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.11/css/mdb.min.css");
    jQuery("#workbenchPageContent").prop("style", "max-width: none");
    jQuery(".SPCanvas-canvas").prop("style", "max-width: none");
    jQuery(".CanvasZone").prop("style", "max-width: none");


    const element: React.ReactElement<IClientPortalProps > = React.createElement(
      ClientPortal,
      {
        description: this.properties.description,
        context:this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
