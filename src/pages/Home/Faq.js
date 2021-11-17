import React from 'react';

export default function Faq(props) {

    return (
        <React.Fragment>
            <section id="faq" className="text-center">
                <div className="row row-cols-1 mb-3 pt-100">

                    <h1 class="">Faq</h1>

                    <div class="table-responsive">
                        <table class="table text-center">
                            <thead>
                                <tr>
                                    <th width="34%"></th>
                                    <th width="22%">Free</th>
                                    <th width="22%">Pro</th>
                                    <th width="22%">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" class="text-start">Public</th>
                                    <td> </td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="text-start">Private</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>

                            <tbody>
                                <tr>
                                    <th scope="row" class="text-start">Permissions</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="text-start">Sharing</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="text-start">Unlimited members</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="text-start">Extra security</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </React.Fragment>
    );

}