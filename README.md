# Managing server state and client state in a large app

## Intro 
This is a small demo app demonstrating an approach to state management in single-page applications.

## Definitions
When discussion app state management it's useful to distinguish between server state and client state.

**Server state** is browser state whose source of truth is remote, i.e. the backend, APIs, servers).

**Client state** is browser state whose source of truth is events generated in the browser and kept in memory, e.g. user selections, user inputs, etc.). As much as possible, we want to exclude from this all state that can be derived from other sources like the url, since we don't want two sources of truth for the same bit of data.

## Design Principles

- Server state is managed separately from client state because it's a different type of problem because the source of truth for that state is not in the app, it's in the backend.

- Server state management is delegated as much as possible to a fetching library that does the heavy lifting of handling the problems associated with it (loading states, retries, caching, revalidation, syncing, etc...)

- Inside the app there are never two sources of truth for the same piece of data. This implies that derived data can never be held as a copy, it needs to change automatically when the raw data changes. Memoisation of derived data is possible as long as it doesn't prevent the derived data from responding automatically to changes in the raw data. 

- When client state is used only within a system or sub-system of the application, it should be private to that system (i.e. managed privately and not exposed in any way to other systems).

- When client state is shared between multiple systems (or sub-systems) it should be kept within any of them it should live in a global app-wide store and managed in a centralised way. This allows the systems to be fully decoupled from each other and avoids the need for them to rely on side effects.  

- Shared client state should be initially kept in a single store until that store becomes too big and unwieldy. We should avoid the temptation of over-architecting and catering for scenarios that are unlikely to arise. Shared client state in an e-commerce application should usually consist of a tiny number of user selections, so there's no need to boil the ocean in advance. 

- It is ok for the single store to contain multiple unrelated objects as long at the store's logic doesn't become unmanageable.

- Systems don't have any knowledge of other systems whatsoever. They do rely on shared libraries, but those libraries don't share directly any state with their consumers. Shared state is orchestrated by the app. The app is the only entity that holds cross-system concerns.

- Systems can only expose pure functions (including React components). This means that exported components can only interact with the app via their props.

- The app should use the name "Tile" for any component that acts as the interface between the app a system's component.


## An example of implementation

The specific implementation followed in this app is the following:

We delegate management of server state (fetching, deduplication of requests/caching, retrials, refreshes) to a data-fetching library. In this example, we are delegating it to `tanstack-query` (aka `react-query`). The rationale of this is that we are in the business of selling physical goods, not reinventing the wheel.

As is best practice, we wrap the specific data-fetching implementation with our own abstraction. In this example, we are only querying one API and we are wrapping the query with our own `use-product-info` hook. The hook can be consumed by TILEs without any knowledge of the server state management internals.

We use a central, app-wide, in-memory store to hold client state.

Since we don't want to prevent ourselves from using the single-page app approach, the store spans across the whole app. This simplified PoC does not address how to remove or update state when navigating to other pages although that could be easily added if needed.

This example uses a single store as the simplest option. Adding multiple stores before they are needed doesn't seem to provide any benefit and would add unnecessary complexity for simple uses cases where there aren't lots of client state data objects to hold. However, if the store became unwieldy or there were performance or productivity issues that advised splitting the store into multiple ones, the approach proposed in this PoC can easily be augmented to support that.

The current implementation is based on `zustand` but it could be abstracted a bit further to be more agnostic of that implementation.
