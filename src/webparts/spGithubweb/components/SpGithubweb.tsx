import * as React from 'react';
import styles from './SpGithubweb.module.scss';
import { ISpGithubwebProps } from './ISpGithubwebProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpGithubweb extends React.Component<ISpGithubwebProps, {}> {
  public render(): React.ReactElement<ISpGithubwebProps> {
    return (
      <div className={ styles.spGithubweb }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to webinar on SPFx and Github with Azure DevOps!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
