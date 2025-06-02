# Managing server state and client state in a large app

## Intro 
This current demo is for the purposes of managing browser state. We can expand
it to handle static content hydration later if needed.

## Definitions
**Server state** is browser state whose source of truth is remote, i.e. the backend,
APIs, servers).

**Client state** is browser state whose source of truth is events generated in
the browser and kept in memory, e.g. user selections, user inputs, etc.). As
much as possible, we want to exclude from this all state that can be derived from other sources like the url, since we don't want two sources of truth for the same bit of data.


## How to maintain server state

We want to delegate management of server state (fetching, deduplication of
requests/caching, retrials, refreshes) to a data-fetching library. In this example,
we are delegating it to `tanstack-query` (aka `react-query`). The rationale of
this is that we are in the business of selling physical goods, not reinventing
the wheel.

As is best practice, we wrap the specific data-fetching implementation with our
own abstraction. In this example, we are only querying one API and we are
wrapping the query with our own `use-product-info` hook. The hook can be
consumed by TILEs without any knowledge of the server state management
internals.

## How to maintain client state

We use a central, app-wide, in-memory store to hold client state.

Since we don't want to prevent ourselves from using the single-page app
approach, the store spans across the whole app. This simplified PoC does not
address how to remove or update state when navigating to other pages although
that could be easily added if needed.

This example uses a single store as the simplest option. Adding multiple stores
before they are needed doesn't seem to provide any benefit and would add unnecessary
complexity for simple uses cases where there aren't lots of client state data
objects to hold. However, if the store became unwieldy or there were performance or
productivity issues that advised splitting the store into multiple ones, the
approach proposed in this PoC can easily be augmented to support that.

The current implementation is based on `zustand` but it could be abstracted a
bit further to be more agnostic of that implementation.


## Principles

- Libraries don't interact with server state or client state directly. Instead
they receive data props and event-handler props from a TILE that controls them.

- TILEs are the interface between the app and the systems/libraries.
