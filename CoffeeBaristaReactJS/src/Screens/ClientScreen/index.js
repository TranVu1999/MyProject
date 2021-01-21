import React from 'react';
import {Route} from 'react-router-dom';
import HeaderComponent from '../../Components/ClientComponent/HeaderComponent';
import FooterComponent from '../../Components/ClientComponent/FooterComponent';

function LayoutClient(props) {
    return (
      <div>
        <HeaderComponent />
        {props.children}
        <FooterComponent/>
      </div>
    );
  }

export default function ClientScreen({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={(propsComponent) => (
                <LayoutClient>
                    <Component {...propsComponent} />
                </LayoutClient>
            )}
        />
    )
}
