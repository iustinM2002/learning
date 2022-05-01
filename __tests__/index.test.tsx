import { getAllByTitle, render, screen, waitFor,within } from '@testing-library/react'
import LobbyTable from '@/components/lobby/LobbyTable';


jest.mock('api' ,() => ({
  __esModule:true,
  default:{
      get: ()=>({
          data:{id:1,title:"Movies"}
      })
  }
}));

describe('sign in', () => {
  it('renders a heading', async () => {
    const element:any = jest.fn()
      render(<LobbyTable element={element}/>);
      const listItem = await waitFor(() => screen.getByTestId('title_table0'));
      await waitFor(()=>expect(listItem).toBeInTheDocument());
  })
})
