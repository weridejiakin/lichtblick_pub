import { ArrowClockwiseRegular } from "@fluentui/react-icons";
import { AppBarIconButton } from "./AppBarIconButton";
import { useLayoutManager } from "@lichtblick/suite-base/context/LayoutManagerContext";
import { defaultFlyfishLayout } from "@lichtblick/suite-base/providers/CurrentLayoutProvider/defaultFlyfishLayout";
import {
  LayoutID,
  LayoutState,
  useCurrentLayoutActions,
  useCurrentLayoutSelector,
} from "@lichtblick/suite-base/context/CurrentLayoutContext";
import { useLayoutBrowserReducer } from "../LayoutBrowser/reducer";
import { useWorkspaceActions } from "@lichtblick/suite-base/context/Workspace/useWorkspaceActions";
import { useTranslation } from "react-i18next";

const selectedLayoutIdSelector = (state: LayoutState) => state.selectedLayout?.id;

const ResetButton = () => {
  const { t } = useTranslation("appBar");
  const layoutManager = useLayoutManager();
  const { sidebarActions } = useWorkspaceActions();
  const currentLayoutId = useCurrentLayoutSelector(selectedLayoutIdSelector);
  const { setSelectedLayoutId } = useCurrentLayoutActions();
  const [, dispatch] = useLayoutBrowserReducer({
    lastSelectedId: currentLayoutId,
    busy: layoutManager.isBusy,
    error: layoutManager.error,
    online: layoutManager.isOnline,
  });

  return (
    <AppBarIconButton
      title={t("resetToDefaultLayout")}
      onClick={async () => {
        const defaultFlyFishLayoutId = "new_default_layout_id" as LayoutID;

        await layoutManager.updateLayout({
          id: defaultFlyFishLayoutId,
          name: "Default Flyfish Layout",
          data: defaultFlyfishLayout,
        });

        setSelectedLayoutId(defaultFlyFishLayoutId);
        dispatch({ type: "select-id", id: defaultFlyFishLayoutId });
        sidebarActions.left.setOpen(false);
        sidebarActions.right.setOpen(false);
      }}
    >
      <ArrowClockwiseRegular />
    </AppBarIconButton>
  );
};

export default ResetButton;
