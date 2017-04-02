var editViewTpl = `<h2>Edit Data</h2>
        <label>
            <h3>Name:</h3>
            <input type="text" name="name" value="<%= name %>">
        </label>
        <label>
            <h3>LastName:</h3>
            <input type="text" name="lastname" value="<%= lastname %>">
        </label>
        <label>
            <h3>Gender:</h3>
            <input type="text" name="gender" value="<%= gender %>">
        </label>
        <label>
            <h3>Email:</h3>
            <input type="text" name="email" value="<%= email %>">
        </label>
        <label>
            <h3>Skype:</h3>
            <input type="text" name="skype" value="<%= skype %>" >
        </label>
        <label>
            <h3>Phone:</h3>
            <input type="text" name="phone" value="<%= phone %>">
        </label>
		<div>
			<button class='saveInfo'>Save</button>
			<button class='closeEdit'>Cancel</button>`;
