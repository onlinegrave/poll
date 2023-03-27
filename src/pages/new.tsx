import { NextPage } from "next";
import { Menu, Transition } from '@headlessui/react'
import { Fragment, SVGProps, useEffect, useRef, useState } from 'react'
import { ArchiveActiveIcon, ArchiveInactiveIcon, ChevronDownIcon, DeleteActiveIcon, DeleteInactiveIcon, DuplicateActiveIcon, DuplicateInactiveIcon, EditActiveIcon, EditInactiveIcon, MoveActiveIcon, MoveInactiveIcon } from "../components/icons";
import { VotiingType } from "../components/poll/VotingType";

const Home: NextPage = () => {
  return <div>
    <div className="flex gap-2 flex-col mt-8">
      <div className="text-center text-2xl font-semibold">Create a poll</div>
      <div className="text-gray-500 text-center text-xs">Complete the below fields to create your poll.</div>
    </div>
    <div className="border-t-4 border-orange-500 bg-primary p-6 m-6">
      <div>Title</div>
      <div className="flex items-center bg-slate-500 ">
        <input type="text" placeholder="Type your question here" className=" flex-1 bg-transparent p-2" />
        <div>Icon</div>
      </div>
      <div>
        <div>Add description</div>
        <div>
          <div>
            <div>Description</div><div>(optional)</div>
          </div>
        </div>
      </div>
      <div>
      </div>
      <div>
      </div>
      <div>
        <div>
          <div>Answer Options</div>
          <div>Paste answer</div>
        </div>
        <div>
          <div>Option 1</div>
          <div>Option 2</div>
        </div>
      </div>
      <div>
        <VotiingType />
      </div>
      <div>
        <div>Multiple choice</div>
      </div>
      <div></div>
      <hr />
      <div>Set end date</div>
      <div>Allow comments</div>
      <div>Custom design</div>
      <div>Results visibility</div>
      <div>Always public</div>
      <div>Edit vote permission</div>
      <div>Admin</div>
      <div>
        <div className="bg-indigo-500">Create poll</div>
        <div className="bg-gray-500">Save draft</div>
      </div>

      <div>How it works</div>
      <div>New to poll? No problem.</div>
      <div>We have designed our poll maker to be as easy and intuitive to use as possible. At the same time, we are constantly optimizing the workflow of creating online polls on Poll.</div>
      <div>
        <div>
          <div>Create a poll</div>
          <div>Choose a title, a set of answer options and some basic settings.</div>
        </div>

        <div>
          <div>Share your link</div>
          <div>Invite participants by sharing your poll links</div>
        </div>

        <div>
          <div>Get results</div>
          <div>When a vote is cast, results will be updated in real-time.</div>
        </div>
      </div>

      <div>
        <div>Create an online poll in a matter of seconds</div>
        <div>
          <p>Whether it&apos;s a quick poll with friends or the solution to an eternal discussion in your forum, StrawPoll helps you find the answer quickly and easily.</p>
          <p>
            Are you on social media and have you ever wanted to know what your followers really think? Here you can create a free poll in seconds, without any signup or registration. Of course, for complex features and to manage your polls, we also offer a login, which is not mandatory.
          </p>
          <p>
            Learn more about how to create your first poll →
          </p>
        </div>
      </div>
      <div>
        <div>Get your results in real-time</div>
        <div>The results of a poll are updated in real time via server-to-client push communication. The admin of a poll can change who should have access to the results at any time and can choose other useful settings.</div>
        <div>Learn more about our different poll types →</div>
      </div>

      <div>
        <div>HELP CENTER</div>
        <div>
          <div>We&apos;re here to help</div>
          <div>While the basic interface is kept simple, StrawPoll provides powerful tools to enable on-demand adjustments for many different purposes. Our help center is an ever-growing resource to help you get assistance with problems and discover features you don&apos;t know yet.</div>
        </div>
      </div>
    </div>
  </div>;
}



export default Home;
