import {
  ThemeTokenColors,
  ThemeWorkbenchColors,
  VSCTheme,
} from "./types/theme";

const createWorkbenchColors = (
  colors: ThemeWorkbenchColors,
  minimal: boolean = true
): VSCTheme["colors"] => ({
  foreground: colors.foreground[500],
  focusBorder: colors.accent[700],
  "icon.foreground": colors.foreground[400] ?? colors.accent[600],
  "badge.background": colors.bg[400],
  "badge.foreground": colors.foreground[400],
  "input.background": colors.bg[400],
  "input.foreground": colors.foreground[400],
  "inputOption.activeBackground": colors.bg[600],
  "inputOption.activeForeground": colors.accent[400],
  "inputOption.activeBorder": colors.border,
  "button.background": colors.bg[600],
  "button.foreground": colors.foreground[400],
  "button.hoverBackground": colors.bg[400],
  "button.secondaryBackground": colors.bg[600],
  "button.secondaryForeground": colors.foreground[400],
  "button.secondaryHoverBackground": colors.bg[400],
  "dropdown.background": colors.bg[600],
  "dropdown.border": colors.border,
  "dropdown.foreground": colors.foreground[500],

  "activityBar.activeBackground": "#00000000",
  "activityBar.activeBorder": colors.foreground[400] ?? colors.accent[600],
  "activityBar.activeFocusBorder": colors.accent[500],
  "activityBar.background": minimal ? colors.bg[500] : colors.bg[600],
  "activityBar.border": colors.border,
  "activityBar.foreground": colors.foreground[500],
  "activityBar.inactiveForeground": colors.foreground[600],
  "activityBarBadge.background": colors.bg[400],
  "activityBarBadge.foreground": colors.foreground[400],

  "sideBar.background": minimal ? colors.bg[500] : colors.bg[600],
  "sideBar.border": colors.border,
  "sideBarSectionHeader.background": minimal ? colors.bg[500] : colors.bg[600],
  "list.activeSelectionBackground": colors.bg[400],
  "list.activeSelectionForeground": colors.foreground[400],
  "list.hoverBackground": colors.bg[300] ?? colors.bg[400],
  "list.inactiveSelectionBackground": colors.bg[400],
  "list.inactiveSelectionForeground": colors.foreground[400],
  "list.highlightForeground": colors.accent[500],

  "statusBar.background": minimal ? colors.bg[500] : colors.bg[600],
  "statusBar.foreground": colors.foreground[500],
  "statusBar.border": colors.border,
  "statusBar.noFolderBackground": colors.bg[500],
  "statusBar.debuggingBackground": colors.bg[400],

  "editor.background": colors.bg[500],
  "editor.foreground": colors.foreground[400],
  "editor.lineHighlightBackground": `${colors.bg[400]}bb`,
  "editorLineNumber.foreground":
    colors.foreground[700] ?? colors.foreground[600],
  "editorLineNumber.activeForeground": colors.foreground[400],
  "editorLineNumber.dimmedForeground":
    colors.foreground[700] ?? colors.foreground[600],
  "editor.selectionBackground": colors.bg[300] ?? colors.bg[400],
  "editor.wordHighlightBackground":
    `${colors.bg[300]}ee` ?? `${colors.bg[400]}ee`,

  "editorWidget.background": colors.bg[600],
  "editorWidget.foreground": colors.foreground[500],
  "editorSuggestWidget.highlightForeground": colors.accent[500],
  "editorSuggestWidget.focusHighlightForeground": colors.accent[400],

  "peekViewEditor.background": colors.bg[600],
  "peekView.border": colors.border,
  "peekViewEditorGutter.background": colors.bg[600],
  "peekViewResult.background": colors.bg[600],
  "peekViewTitle.background": colors.bg[600],
  "peekViewTitleLabel.foreground": colors.foreground[400],
  "peekViewResult.lineForeground": colors.foreground[600],
  "peekViewTitleDescription.foreground": colors.foreground[600],

  "debugToolBar.background": colors.bg[600],

  "titleBar.activeBackground": minimal ? colors.bg[500] : colors.bg[600],
  "titleBar.inactiveBackground": minimal ? colors.bg[500] : colors.bg[600],
  "titleBar.activeForeground": colors.foreground[500],
  "titleBar.border": colors.border,

  "menu.background": colors.bg[600],
  "menu.foreground": colors.foreground[500],
  "menu.separatorBackground": colors.border,
  "menu.selectionForeground": colors.foreground[400],
  "menu.selectionBackground": colors.bg[400],
  "menubar.selectionBackground": colors.bg[400],
  "menubar.selectionForeground": colors.foreground[400],

  "editorGroupHeader.tabsBackground": colors.bg[500],

  "tab.activeBackground": colors.bg[400],
  "tab.activeForeground": colors.accent[400],
  "tab.inactiveForeground": colors.foreground[700] ?? colors.foreground[600],
  "tab.inactiveBackground": colors.bg[500],

  "breadcrumb.background": colors.bg[500],
  "breadcrumb.foreground": colors.foreground[500],

  "panel.background": minimal ? colors.bg[500] : colors.bg[600],
  "panelTitle.activeForeground": colors.foreground[500],
  "panel.border": colors.border,
  "terminal.foreground": colors.foreground[500],

  "terminal.ansiBlack": colors.terminal?.ansiBlack ?? "#1e2030",
  "terminal.ansiBrightBlack": colors.terminal?.ansiBrightBlack ?? "#5b6078",
  "terminal.ansiBlue": colors.terminal?.ansiBlue ?? "#8aadf4",
  "terminal.ansiBrightBlue": colors.terminal?.ansiBrightBlue ?? "#8aadf4",
  "terminal.ansiCyan": colors.terminal?.ansiCyan ?? "#91d7e3",
  "terminal.ansiBrightCyan": colors.terminal?.ansiBrightCyan ?? "#91d7e3",
  "terminal.ansiGreen": colors.terminal?.ansiGreen ?? "#a6da95",
  "terminal.ansiBrightGreen": colors.terminal?.ansiBrightGreen ?? "#a6da95",
  "terminal.ansiMagenta": colors.terminal?.ansiMagenta ?? "#c6a0f6",
  "terminal.ansiBrightMagenta": colors.terminal?.ansiBrightMagenta ?? "#c6a0f6",
  "terminal.ansiRed": colors.terminal?.ansiRed ?? "#ed8796",
  "terminal.ansiBrightRed": colors.terminal?.ansiBrightRed ?? "#ed8796",
  "terminal.ansiWhite": colors.terminal?.ansiWhite ?? "#cad3f5",
  "terminal.ansiBrightWhite": colors.terminal?.ansiBrightWhite ?? "#cad3f5",
  "terminal.ansiYellow": colors.terminal?.ansiYellow ?? "#eed49f",
  "terminal.ansiBrightYellow": colors.terminal?.ansiBrightYellow ?? "#eed49f",

  "gitDecoration.addedResourceForeground":
    colors.gitDecoration?.addedResourceForeground ?? "#5fb3a1",
  "gitDecoration.conflictingResourceForeground":
    colors.gitDecoration?.conflictingResourceForeground ?? "#d0679d",
  "gitDecoration.deletedResourceForeground":
    colors.gitDecoration?.deletedResourceForeground ?? "#d0679d",
  "gitDecoration.ignoredResourceForeground":
    colors.gitDecoration?.ignoredResourceForeground ?? "#767c9d70",
  "gitDecoration.modifiedResourceForeground":
    colors.gitDecoration?.modifiedResourceForeground ?? "#ADD7FF",
  "gitDecoration.renamedResourceForeground":
    colors.gitDecoration?.renamedResourceForeground ?? "#5DE4c7",
  "gitDecoration.stageDeletedResourceForeground":
    colors.gitDecoration?.stageDeletedResourceForeground ?? "#d0679d",
  "gitDecoration.stageModifiedResourceForeground":
    colors.gitDecoration?.stageModifiedResourceForeground ?? "#ADD7FF",
  "gitDecoration.submoduleResourceForeground":
    colors.gitDecoration?.submoduleResourceForeground ?? "#89ddff",
  "gitDecoration.untrackedResourceForeground":
    colors.gitDecoration?.untrackedResourceForeground ?? "#5DE4c7",
});

const createTokenColors = (
  colors: ThemeTokenColors
): VSCTheme["tokenColors"] => [
  {
    scope: ["comment", "punctuation.definition.comment"],
    settings: {
      foreground: colors.COMMENT,
    },
  },
  {
    scope: ["variable"],
    settings: { foreground: colors.VARIABLE },
  },
  {
    scope: [
      "support.variable",
      "variable.other.predefined",
      "variable.other.property",
    ],
    settings: {
      foreground: colors.VARIABLE_PROPERTY,
    },
  },
  {
    scope: ["variable.other.constant.object"],
    settings: {
      foreground: colors.VARIABLE_CONSTANT,
    },
  },
  {
    scope: [
      "entity.name.function",
      "support.function",
      "punctuation.definition.template-expression",
      "meta.function-call",
    ],
    settings: { foreground: colors.FUNCTION },
  },
  {
    scope: ["variable.parameter"],
    settings: {
      foreground: colors.FUNCTION_PARAMETER ?? colors.VARIABLE,
    },
  },
  {
    scope: ["keyword"],
    settings: {
      foreground: colors.KEYWORD,
    },
  },
  {
    scope: ["storage", "keyword.operator"],
    settings: {
      foreground: colors.STORAGE,
    },
  },
  {
    scope: ["storage.modifier.async", "storage.modifier"],
    settings: {
      foreground: colors.KEYWORD,
    },
  },
  {
    scope: ["support.type.primitive", "storage.type.java"],
    settings: {
      foreground: colors.PRIMITIVE,
    },
  },
  {
    scope: [
      "support.class",
      "support.type",
      "entity.name.type",
      "entity.other.inherited-class",
      "entity.name.scope-resolution",
      "variable.language.this",
      "variable.language.super",
      "variable.parameter.function.language.special.self",
    ],
    settings: {
      foreground: colors.CLASS,
    },
  },
  {
    scope: ["entity.name.tag", "support.class.component"],
    settings: {
      foreground: colors.TAG,
    },
  },
  {
    scope: [
      "punctuation.definition.tag.begin",
      "punctuation.definition.tag.end",
      "punctuation.definition.typeparameters.begin",
      "punctuation.definition.typeparameters.end",
    ],
    settings: {
      foreground: colors.PUNCTUATION_TAG ?? colors.PUNCTUATION,
    },
  },
  {
    scope: ["entity.other.attribute-name"],
    settings: {
      foreground: colors.ATTRIBUTE,
    },
  },
  {
    scope: ["entity.other.attribute-name.id"],
    settings: {
      foreground: colors.ID,
    },
  },
  {
    scope: ["string", "entity.other.attribute-name.pseudo-class"],
    settings: {
      foreground: colors.STRING,
    },
  },
  {
    scope: ["string.regexp"],
    settings: {
      foreground: colors.REGEXP,
    },
  },
  {
    scope: ["support.constant", "constant.language"],
    settings: {
      foreground: colors.CONSTANT,
    },
  },
  {
    scope: ["constant.numeric", "keyword.other.unit"],
    settings: {
      foreground: colors.NUMBER,
    },
  },
  {
    scope: ["keyword.operator.new", "keyword.control.new"],
    settings: {
      foreground: colors.TRUTHY,
    },
  },
  {
    scope: [
      "support.class.error",
      "keyword.control.trycatch",
      "keyword.operator.expression.delete",
      "keyword.operator.expression.void",
      "keyword.operator.void",
      "keyword.operator.delete",
      "constant.language.null",
      "constant.language.boolean.false",
      "constant.language.undefined",
    ],
    settings: {
      foreground: colors.FALSY,
    },
  },
  {
    scope: ["keyword.operator.assignment", "punctuation"],
    settings: {
      foreground: colors.PUNCTUATION,
    },
  },
  {
    scope: ["source.css support.type.property-name"],
    settings: {
      foreground: colors.CSS_PROPERTY_NAME,
    },
  },
  {
    scope: [
      "variable.other.readwrite.alias",
      "entity.name.namespace",
      "storage.modifier.import",
      "storage.modifier.package",
    ],
    settings: {
      foreground: colors.VARIABLE_READWRITE_ALIAS,
    },
  },
  {
    scope: ["support.type.property-name.json", "source.yaml entity.name.tag"],
    settings: {
      foreground: colors.JSON_KEY,
    },
  },
];

export class Theme {
  name: string;
  workbench: ThemeWorkbenchColors;
  tokens: ThemeTokenColors;

  constructor(
    name: string,
    workbench: ThemeWorkbenchColors,
    tokens: ThemeTokenColors
  ) {
    this.name = name;
    this.workbench = workbench;
    this.tokens = tokens;
  }

  getName() {
    return `${this.name.replace(" ", "-")}-color-theme.json`;
  }

  build(minimal = true): VSCTheme {
    return {
      name: this.name,
      colors: createWorkbenchColors(this.workbench, minimal),
      tokenColors: createTokenColors(this.tokens),
      semanticHighlighting: true,
    };
  }
}
