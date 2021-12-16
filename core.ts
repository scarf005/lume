import type {
  default as Site,
  ServerOptions,
  SiteOptions,
  WatcherOptions,
} from "./core/site.ts";

import type {
  default as Events,
  Event,
  EventListener,
  EventOptions,
  EventType,
} from "./core/events.ts";

import type {
  default as Scripts,
  ScriptOptions,
  ScriptOrFunction,
} from "./core/scripts.ts";

import type { default as Reader, Loader } from "./core/reader.ts";
import type Logger from "./core/logger.ts";
import type Writer from "./core/writer.ts";
import type {
  Content,
  Data,
  Dest,
  Directory,
  Page,
  Src,
} from "./core/filesystem.ts";
import type Source from "./core/source.ts";
import type Renderer from "./core/renderer.ts";
import type { default as Processors, Processor } from "./core/processors.ts";
import type { default as Scopes, ScopeFilter } from "./core/scopes.ts";
import type {
  default as Engines,
  Engine,
  Helper,
  HelperOptions,
} from "./core/engines.ts";

interface ErrorData {
  cause?: Error;
  name?: string;
  [key: string]: unknown;
}

/** Data to create a new response. */
type FileResponse = [BodyInit | null, ResponseInit];

/** The method that installs a plugin */
type PluginSetup = ((options: unknown) => Plugin);

/** A generic Lume plugin */
type Plugin = (site: Site) => void;

export type {
  Content,
  Data,
  Dest,
  Directory,
  Engine,
  Engines,
  ErrorData,
  Event,
  EventListener,
  EventOptions,
  Events,
  EventType,
  FileResponse,
  Helper,
  HelperOptions,
  Loader,
  Logger,
  Page,
  Plugin,
  PluginSetup,
  Processor,
  Processors,
  Reader,
  Renderer,
  ScopeFilter,
  Scopes,
  ScriptOptions,
  ScriptOrFunction,
  Scripts,
  ServerOptions,
  Site,
  SiteOptions,
  Source,
  Src,
  WatcherOptions,
  Writer,
};
