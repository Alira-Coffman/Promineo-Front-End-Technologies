import React from "react";

const WithAlert = (WrappedComponent) => {
    return class extends React.Component {
        render() {
          return(
            <div className="alert alert-primary" role="alert">
              <WrappedComponent {...this.props} />
            </div>
          );
        }
      }
    
}
export default WithAlert