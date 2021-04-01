import React from "react";
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { App } from "./components/App";
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

const server = setupServer(
  rest.get('/todos', (req, res, ctx) => {
    return res(ctx.json([
        {
          id: 'df1ce37b-c137-4adb-be9f-6195f9b86b20',
          title: 'Second todo',
          complited: true
        },
        {
          id: 'a52543fb-9fcb-4324-af8b-ed1970670122',
          title: 'One more todo',
          complited: true
        }      
      ]))
  }),
  rest.post('/todos/add', (req, res, ctx) => {
    return res(ctx.json([
        {
          id: 'ee492d70-fe2f-41b5-a54f-3906d61f6419',
          title: 'new todo',
          complited: false
        }        
      ]))
  })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('render App', () => {
  it('before loading data from server', () => {
    
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  })

  it('get title not totost', () => {
    render(<App />);

    const element = screen.getByTestId('title-not-todos');
  })


  it('Loads and todos', async () => {
    render(<App url="/todos" />);

    await waitFor(() => screen.getByText(/todos:/i));
    expect(await screen.findByText('Second todo')).toBeInTheDocument();
  }) 

  it('Add new todo', async () => {
    render(<App url="/todos/add" />);     
    
    userEvent.type(screen.getByRole('textbox'), 'new todo');
    userEvent.type(screen.getByRole('textbox'), '{enter}');          
    expect(await screen.findByText(/new todo/i)).toBeInTheDocument();
  })

  it('change checkbox', async () => {
    render(<App />);
    userEvent.type(screen.getByRole('textbox'), 'Hello, World!');
    expect(await screen.getByRole('textbox').value).toBe('Hello, World!');
  })  
});
