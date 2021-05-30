import logo from './logo.svg';
import './App.css';
import { AuthenticatedTemplate, UnauthenticatedTemplate ,useIsAuthenticated,useMsal,MsalAuthenticationTemplate} from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
function ErrorComponent({error}) {
  return <p>An Error Occurred: {error}</p>;
}

function LoadingComponent() {
  return <p>Authentication in progress...</p>;
}


// https://graph.microsoft.com/v1.0/me


function App() {
  const { instance, accounts, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  console.log(isAuthenticated);


    const authRequest = {
        scopes: ["openid", "profile"]
    };

console.log(accounts);
console.log(instance);
console.log(inProgress);

  return (
    <div className="ss">

    {isAuthenticated}
    <div>
    <MsalAuthenticationTemplate 
            interactionType={InteractionType.Popup} 
            authenticationRequest={authRequest} 
            errorComponent={ErrorComponent} 
            loadingComponent={LoadingComponent}
        >
            <p>At least one account is signed in!</p>
        </MsalAuthenticationTemplate>

    <AuthenticatedTemplate>
                <p>At least one account is signed in!</p>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <p>No users are signed in!</p>
            </UnauthenticatedTemplate>
    </div>
    </div>
  );
}

export default App;
