import '../output.css';

let bundles = [
  {
    name: 'Bundle 1: For any 1 course',
    price: 'Tk 3000 per month'
  },
  {
    name: 'Bundle 2: For any 2 courses',
    price: 'Tk 5000 per month'
  },
  {
    name: 'Bundle 3: For any 3 courses',
    price: 'Tk 6000 per month'
  },
  {
    name: 'Bundle 4: For all 4 courses',
    price: 'Tk 7000 per month'
  }
]

function FAQ() {
  return (
    <div class="w-full">
      <h1 class="w-full text-center">Frequently Asked Questions</h1>

      <h1>What are the dates for Polynomial Camp?</h1>
      <p>The program will be from <b>24th June</b> to <b>16th September</b></p>
      <hr />

      <h1>Who is Polynomial Camp for?</h1>
      <p>Polynomial Camp is targeted towards anyone who is curious to learn more. We expect this to be mostly helpful for students in <b>high school and undergraduates.</b></p>
      <p>We welcome people from all backgrounds but also want to specifically target resources to those who are from a disadvantaged background. If you have questions regarding this or if you believe you need specific guidance for the camp to be helpful to you, please feel free to email us at <a href="mailto: jubayer@stanford.edu"><u>jubayer@stanford.edu</u></a> or <a href="mailto: tausifh@bu.edu"><u>tausifh@bu.edu</u></a>.</p>
      <hr />
      
      <h1>Are there any prerequisites for joining Polynomial Camp?</h1>
      <p>There are some fairly basic prerequisites that you should know to be able to fully learn what we will teach (these are written in detail in the next section). However, we welcome everyone as long as you love an adventure!</p>
      <hr />

      <h1>What will the weekly schedule be?</h1>
      <p>Tentatively, we will have two lectures each week and 2-3 office hours where people can ask us questions and we can help with problem solving.</p>
      <hr />

      <h1>How will the classes be conducted?</h1>
      <p>Classes will be held through Zoom lectures. We will have groups (on Slack/Discord/Edstem) where people can ask questions and discuss material (or memes). </p>
      <hr />

      <h1>What are the fees?</h1>
      <p>We are offering a few bundles:</p>
      <div class="flex justify-center">
        <table>
          <tr class="bg-red">
            <th>Bundle</th>
            <th>Price</th>
          </tr>
          {bundles.map((b) => (<tr class="odd:bg-red"><td class="px-8 py-4">{b.name}</td><td class="px-8 py-4">{b.price}</td></tr>))}
        </table>
      </div>
      <hr />

      <h1>Can I get financial aid?</h1>
      <p>Yes! If you are interested in enrolling in Polynomial Camp but you require financial aid, please feel free to reach out to us. To do so, send us an email at either <a href="mailto: jubayer@stanford.edu"><u>jubayer@stanford.edu</u></a> or <a href="mailto: tausifh@bu.edu"><u>tausifh@bu.edu</u></a>. In the email, please tell us why you require financial aid and provide any supporting documentation you can provide to strengthen the financial aid application. We are providing aid on a case-by-case basis and we are trying our best to broaden access to as large a group as possible.</p>
      <hr />
    </div>
  );
}

export default FAQ;