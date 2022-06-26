import Navbar from "./navbar";
import Form from "./form";
import PageContent from "./page-content";
import { ThemeContextProvider } from "../contexts/theme-context";
import { LanguageContextProvider } from "../contexts/language-context";

const ContextAppHooks = () => {
  return (
    <LanguageContextProvider>
      <ThemeContextProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </ThemeContextProvider>
    </LanguageContextProvider>
  );
};

export default ContextAppHooks;
